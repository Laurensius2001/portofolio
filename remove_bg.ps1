Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\msib5\.gemini\antigravity-ide\brain\a9b55f01-5dd9-423c-82fa-45236e4a0008\.user_uploaded\media_1789844211697.jpg"
$destPath = "d:\PROJECT LORENS\portofolio\public\lorens-new.png"

$src = [System.Drawing.Bitmap]::FromFile($srcPath)
$w = $src.Width
$h = $src.Height

$dest = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# Lock bits for high speed
$rect = New-Object System.Drawing.Rectangle(0, 0, $w, $h)
$srcData = $src.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadOnly, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
$destData = $dest.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::WriteOnly, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

$srcBytes = New-Object byte[] ($srcData.Stride * $h)
$destBytes = New-Object byte[] ($destData.Stride * $h)

[System.Runtime.InteropServices.Marshal]::Copy($srcData.Scan0, $srcBytes, 0, $srcBytes.Length)

# Visited / Background mask
$isBg = New-Object bool[] ($w * $h)
$queue = New-Object System.Collections.Generic.Queue[int]

function Get-IsCheckerPixel([int]$x, [int]$y) {
    $idx = ($y * $srcData.Stride) + ($x * 3)
    $b = $srcBytes[$idx]
    $g = $srcBytes[$idx + 1]
    $r = $srcBytes[$idx + 2]
    
    $diff = [Math]::Max([Math]::Abs($r - $g), [Math]::Max([Math]::Abs($r - $b), [Math]::Abs($g - $b)))
    # Checkerboard is gray (185-195) or white (250-255) with zero/tiny saturation diff
    if ($diff -le 8 -and $r -ge 160) {
        return $true
    }
    return $false
}

# Seed borders (top, left, right)
for ($x = 0; $x -lt $w; $x++) {
    if (Get-IsCheckerPixel $x 0) {
        $idx = 0 * $w + $x
        $isBg[$idx] = $true
        $queue.Enqueue($idx)
    }
}
for ($y = 0; $y -lt $h; $y++) {
    if (Get-IsCheckerPixel 0 $y) {
        $idx = $y * $w + 0
        if (-not $isBg[$idx]) {
            $isBg[$idx] = $true
            $queue.Enqueue($idx)
        }
    }
    if (Get-IsCheckerPixel ($w - 1) $y) {
        $idx = $y * $w + ($w - 1)
        if (-not $isBg[$idx]) {
            $isBg[$idx] = $true
            $queue.Enqueue($idx)
        }
    }
}

# BFS flood fill
$dx = @(1, -1, 0, 0)
$dy = @(0, 0, 1, -1)

while ($queue.Count -gt 0) {
    $curr = $queue.Dequeue()
    $cx = $curr % $w
    $cy = [Math]::Floor($curr / $w)
    
    for ($i = 0; $i -lt 4; $i++) {
        $nx = $cx + $dx[$i]
        $ny = $cy + $dy[$i]
        
        if ($nx -ge 0 -and $nx -lt $w -and $ny -ge 0 -and $ny -lt $h) {
            $nidx = $ny * $w + $nx
            if (-not $isBg[$nidx]) {
                if (Get-IsCheckerPixel $nx $ny) {
                    $isBg[$nidx] = $true
                    $queue.Enqueue($nidx)
                }
            }
        }
    }
}

# Write output pixels with smooth anti-aliased edge
for ($y = 0; $y -lt $h; $y++) {
    for ($x = 0; $x -lt $w; $x++) {
        $pixelIdx = $y * $w + $x
        $srcIdx = ($y * $srcData.Stride) + ($x * 3)
        $destIdx = ($y * $destData.Stride) + ($x * 4)
        
        $b = $srcBytes[$srcIdx]
        $g = $srcBytes[$srcIdx + 1]
        $r = $srcBytes[$srcIdx + 2]
        
        if ($isBg[$pixelIdx]) {
            $destBytes[$destIdx] = 0
            $destBytes[$destIdx + 1] = 0
            $destBytes[$destIdx + 2] = 0
            $destBytes[$destIdx + 3] = 0 # Transparent
        } else {
            # Check edge neighbors for anti-aliasing feathering
            $bgNeighbors = 0
            for ($k = 0; $k -lt 4; $k++) {
                $ex = $x + $dx[$k]
                $ey = $y + $dy[$k]
                if ($ex -ge 0 -and $ex -lt $w -and $ey -ge 0 -and $ey -lt $h) {
                    if ($isBg[$ey * $w + $ex]) { $bgNeighbors++ }
                }
            }
            
            $alpha = 255
            if ($bgNeighbors -gt 0) {
                # Edge pixel: soft alpha
                $alpha = [byte](255 - ($bgNeighbors * 40))
            }
            
            $destBytes[$destIdx] = $b
            $destBytes[$destIdx + 1] = $g
            $destBytes[$destIdx + 2] = $r
            $destBytes[$destIdx + 3] = $alpha
        }
    }
}

[System.Runtime.InteropServices.Marshal]::Copy($destBytes, 0, $destData.Scan0, $destBytes.Length)

$src.UnlockBits($srcData)
$dest.UnlockBits($destData)

$dest.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)

$src.Dispose()
$dest.Dispose()

Write-Output "Successfully saved transparent image to $destPath"
