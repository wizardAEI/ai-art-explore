import AppKit
import CoreGraphics
import Foundation

let outputPath =
  CommandLine.arguments.dropFirst().first
  ?? "public/assets/art-tech-hero-2026-05-28-workshops-enter-exhibitions.png"
let width = 1792
let height = 1024
let canvasRect = CGRect(x: 0, y: 0, width: width, height: height)

let rep = NSBitmapImageRep(
  bitmapDataPlanes: nil,
  pixelsWide: width,
  pixelsHigh: height,
  bitsPerSample: 8,
  samplesPerPixel: 4,
  hasAlpha: true,
  isPlanar: false,
  colorSpaceName: .deviceRGB,
  bytesPerRow: 0,
  bitsPerPixel: 0
)!

NSGraphicsContext.saveGraphicsState()
NSGraphicsContext.current = NSGraphicsContext(bitmapImageRep: rep)

func fillGradient(_ colors: [NSColor], start: CGPoint, end: CGPoint) {
  NSGradient(colors: colors)!.draw(from: start, to: end, options: [])
}

func fillRect(_ rect: CGRect, color: NSColor) {
  color.setFill()
  rect.fill()
}

func fillRoundedRect(_ rect: CGRect, radius: CGFloat, color: NSColor) {
  color.setFill()
  NSBezierPath(roundedRect: rect, xRadius: radius, yRadius: radius).fill()
}

func fillEllipse(_ rect: CGRect, color: NSColor) {
  color.setFill()
  NSBezierPath(ovalIn: rect).fill()
}

func strokeLine(
  from: CGPoint,
  to: CGPoint,
  width: CGFloat,
  color: NSColor,
  alpha: CGFloat = 1
) {
  let path = NSBezierPath()
  path.move(to: from)
  path.line(to: to)
  path.lineWidth = width
  path.lineCapStyle = .round
  color.withAlphaComponent(alpha).setStroke()
  path.stroke()
}

func strokeRoundedRect(
  _ rect: CGRect,
  radius: CGFloat,
  width: CGFloat,
  color: NSColor,
  alpha: CGFloat
) {
  let path = NSBezierPath(roundedRect: rect, xRadius: radius, yRadius: radius)
  path.lineWidth = width
  color.withAlphaComponent(alpha).setStroke()
  path.stroke()
}

func fillPolygon(_ points: [CGPoint], color: NSColor) {
  guard let first = points.first else { return }
  let path = NSBezierPath()
  path.move(to: first)
  for point in points.dropFirst() {
    path.line(to: point)
  }
  path.close()
  color.setFill()
  path.fill()
}

NSColor(calibratedRed: 0.03, green: 0.04, blue: 0.06, alpha: 1).setFill()
canvasRect.fill()

fillGradient(
  [
    NSColor(calibratedRed: 0.03, green: 0.05, blue: 0.08, alpha: 1),
    NSColor(calibratedRed: 0.08, green: 0.14, blue: 0.20, alpha: 1),
    NSColor(calibratedRed: 0.12, green: 0.09, blue: 0.08, alpha: 1),
  ],
  start: CGPoint(x: 160, y: 1080),
  end: CGPoint(x: 1660, y: 40)
)

fillEllipse(
  CGRect(x: -120, y: 520, width: 760, height: 620),
  color: NSColor(calibratedRed: 0.26, green: 0.66, blue: 0.74, alpha: 0.28)
)
fillEllipse(
  CGRect(x: 1060, y: 380, width: 820, height: 560),
  color: NSColor(calibratedRed: 0.91, green: 0.57, blue: 0.26, alpha: 0.18)
)
fillEllipse(
  CGRect(x: 540, y: 610, width: 780, height: 320),
  color: NSColor(calibratedWhite: 1, alpha: 0.08)
)

for y in stride(from: 620, through: 1000, by: 24) {
  strokeLine(
    from: CGPoint(x: 0, y: CGFloat(y)),
    to: CGPoint(x: 1792, y: CGFloat(y)),
    width: 1,
    color: NSColor(calibratedWhite: 1, alpha: 1),
    alpha: 0.025
  )
}

fillPolygon(
  [
    CGPoint(x: 0, y: 0),
    CGPoint(x: 1792, y: 0),
    CGPoint(x: 1792, y: 320),
    CGPoint(x: 0, y: 278),
  ],
  color: NSColor(calibratedRed: 0.03, green: 0.05, blue: 0.07, alpha: 0.94)
)

fillPolygon(
  [
    CGPoint(x: 0, y: 278),
    CGPoint(x: 1792, y: 320),
    CGPoint(x: 1792, y: 392),
    CGPoint(x: 0, y: 346),
  ],
  color: NSColor(calibratedRed: 0.09, green: 0.07, blue: 0.07, alpha: 0.32)
)

let windowBands: [CGRect] = [
  CGRect(x: 1180, y: 480, width: 210, height: 278),
  CGRect(x: 1390, y: 472, width: 182, height: 286),
  CGRect(x: 1572, y: 460, width: 164, height: 300),
]

for band in windowBands {
  fillGradient(
    [
      NSColor(calibratedRed: 0.18, green: 0.38, blue: 0.55, alpha: 0.52),
      NSColor(calibratedRed: 0.38, green: 0.62, blue: 0.79, alpha: 0.72),
      NSColor(calibratedRed: 0.09, green: 0.14, blue: 0.18, alpha: 0.68),
    ],
    start: CGPoint(x: band.minX, y: band.maxY),
    end: CGPoint(x: band.maxX, y: band.minY)
  )
  strokeRoundedRect(
    band,
    radius: 10,
    width: 1.2,
    color: NSColor(calibratedWhite: 1, alpha: 1),
    alpha: 0.18
  )
}

let hangingFrames: [CGRect] = [
  CGRect(x: 1136, y: 694, width: 278, height: 26),
  CGRect(x: 1180, y: 760, width: 290, height: 24),
]

for frame in hangingFrames {
  strokeLine(
    from: CGPoint(x: frame.minX + 20, y: 1010),
    to: CGPoint(x: frame.minX + 20, y: frame.minY),
    width: 1.2,
    color: NSColor(calibratedWhite: 1, alpha: 1),
    alpha: 0.16
  )
  strokeLine(
    from: CGPoint(x: frame.maxX - 20, y: 1010),
    to: CGPoint(x: frame.maxX - 20, y: frame.minY),
    width: 1.2,
    color: NSColor(calibratedWhite: 1, alpha: 1),
    alpha: 0.16
  )
  fillRoundedRect(
    frame,
    radius: 8,
    color: NSColor(calibratedRed: 0.90, green: 0.58, blue: 0.28, alpha: 0.76)
  )
  fillRoundedRect(
    frame.insetBy(dx: 16, dy: 5),
    radius: 5,
    color: NSColor(calibratedRed: 0.05, green: 0.08, blue: 0.10, alpha: 1)
  )
}

let scrims: [(CGRect, NSColor)] = [
  (CGRect(x: 72, y: 214, width: 246, height: 566), NSColor(calibratedRed: 0.36, green: 0.88, blue: 0.98, alpha: 0.20)),
  (CGRect(x: 368, y: 298, width: 176, height: 476), NSColor(calibratedRed: 0.56, green: 0.83, blue: 0.90, alpha: 0.12)),
  (CGRect(x: 604, y: 344, width: 202, height: 412), NSColor(calibratedRed: 0.93, green: 0.66, blue: 0.41, alpha: 0.13)),
  (CGRect(x: 864, y: 330, width: 178, height: 420), NSColor(calibratedRed: 0.33, green: 0.77, blue: 0.90, alpha: 0.18)),
  (CGRect(x: 1340, y: 304, width: 164, height: 414), NSColor(calibratedRed: 0.95, green: 0.61, blue: 0.30, alpha: 0.18)),
  (CGRect(x: 1682, y: 268, width: 110, height: 468), NSColor(calibratedRed: 0.88, green: 0.58, blue: 0.31, alpha: 0.20)),
]

for (scrim, color) in scrims {
  strokeLine(
    from: CGPoint(x: scrim.midX, y: 1020),
    to: CGPoint(x: scrim.midX, y: scrim.maxY),
    width: 1.1,
    color: NSColor(calibratedWhite: 1, alpha: 1),
    alpha: 0.12
  )
  fillRoundedRect(scrim, radius: 10, color: color)
  strokeRoundedRect(
    scrim.insetBy(dx: 12, dy: 12),
    radius: 8,
    width: 0.8,
    color: NSColor(calibratedWhite: 1, alpha: 1),
    alpha: 0.12
  )
}

let sideGlow = [
  CGRect(x: 0, y: 250, width: 200, height: 560),
  CGRect(x: 1588, y: 246, width: 204, height: 544),
]
for rect in sideGlow {
  fillRoundedRect(
    rect,
    radius: 12,
    color: NSColor(calibratedWhite: 1, alpha: 0.03)
  )
}

let tables: [CGRect] = [
  CGRect(x: 820, y: 398, width: 266, height: 26),
  CGRect(x: 600, y: 186, width: 618, height: 120),
  CGRect(x: 82, y: 134, width: 266, height: 20),
]

fillRoundedRect(
  tables[0],
  radius: 8,
  color: NSColor(calibratedWhite: 1, alpha: 0.14)
)
strokeLine(
  from: CGPoint(x: 846, y: 398),
  to: CGPoint(x: 838, y: 304),
  width: 2,
  color: NSColor(calibratedWhite: 1, alpha: 1),
  alpha: 0.18
)
strokeLine(
  from: CGPoint(x: 1060, y: 398),
  to: CGPoint(x: 1068, y: 302),
  width: 2,
  color: NSColor(calibratedWhite: 1, alpha: 1),
  alpha: 0.18
)

fillRoundedRect(
  tables[1],
  radius: 14,
  color: NSColor(calibratedWhite: 1, alpha: 0.12)
)
strokeRoundedRect(
  tables[1].insetBy(dx: 24, dy: 16),
  radius: 10,
  width: 1.2,
  color: NSColor(calibratedWhite: 1, alpha: 1),
  alpha: 0.18
)

fillGradient(
  [
    NSColor(calibratedRed: 0.94, green: 0.69, blue: 0.32, alpha: 0.18),
    NSColor(calibratedRed: 0.26, green: 0.70, blue: 0.84, alpha: 0.14),
  ],
  start: CGPoint(x: tables[1].minX, y: tables[1].maxY),
  end: CGPoint(x: tables[1].maxX, y: tables[1].minY)
)

let photoRects: [CGRect] = [
  CGRect(x: 710, y: 216, width: 92, height: 58),
  CGRect(x: 822, y: 226, width: 114, height: 48),
  CGRect(x: 956, y: 212, width: 86, height: 56),
  CGRect(x: 1060, y: 220, width: 92, height: 42),
]

for (index, photo) in photoRects.enumerated() {
  fillRoundedRect(
    photo,
    radius: 4,
    color: index.isMultiple(of: 2)
      ? NSColor(calibratedRed: 0.96, green: 0.90, blue: 0.78, alpha: 0.82)
      : NSColor(calibratedRed: 0.72, green: 0.88, blue: 0.94, alpha: 0.82)
  )
}

let acrylicBlocks: [CGRect] = [
  CGRect(x: 1128, y: 170, width: 42, height: 118),
  CGRect(x: 1184, y: 196, width: 34, height: 92),
  CGRect(x: 1236, y: 182, width: 44, height: 106),
  CGRect(x: 1288, y: 210, width: 38, height: 78),
  CGRect(x: 1388, y: 158, width: 80, height: 138),
]

for (index, block) in acrylicBlocks.enumerated() {
  fillRoundedRect(
    block,
    radius: 6,
    color: index == 4
      ? NSColor(calibratedRed: 0.36, green: 0.80, blue: 0.91, alpha: 0.34)
      : NSColor(calibratedRed: 0.96, green: 0.68, blue: 0.30, alpha: 0.28)
  )
  strokeRoundedRect(
    block,
    radius: 6,
    width: 1,
    color: NSColor(calibratedWhite: 1, alpha: 1),
    alpha: 0.26
  )
}

let smallScreens: [CGRect] = [
  CGRect(x: 292, y: 420, width: 52, height: 92),
  CGRect(x: 512, y: 352, width: 38, height: 84),
]

for screen in smallScreens {
  fillRoundedRect(
    screen,
    radius: 5,
    color: NSColor(calibratedRed: 0.10, green: 0.12, blue: 0.16, alpha: 0.84)
  )
  fillRoundedRect(
    screen.insetBy(dx: 6, dy: 8),
    radius: 4,
    color: NSColor(calibratedRed: 0.38, green: 0.82, blue: 0.92, alpha: 0.30)
  )
}

func drawFigure(x: CGFloat, baseY: CGFloat, scale: CGFloat, facingLeft: Bool) {
  let direction: CGFloat = facingLeft ? -1 : 1
  fillEllipse(
    CGRect(x: x - 12 * scale, y: baseY + 96 * scale, width: 24 * scale, height: 28 * scale),
    color: NSColor(calibratedWhite: 0.08, alpha: 0.94)
  )
  fillRoundedRect(
    CGRect(x: x - 18 * scale, y: baseY + 28 * scale, width: 36 * scale, height: 74 * scale),
    radius: 14 * scale,
    color: NSColor(calibratedWhite: 0.08, alpha: 0.92)
  )
  strokeLine(
    from: CGPoint(x: x - 6 * scale, y: baseY + 28 * scale),
    to: CGPoint(x: x - 16 * scale, y: baseY - 8 * scale),
    width: 5 * scale,
    color: NSColor(calibratedWhite: 0.08, alpha: 1),
    alpha: 0.94
  )
  strokeLine(
    from: CGPoint(x: x + 6 * scale, y: baseY + 28 * scale),
    to: CGPoint(x: x + 16 * scale, y: baseY - 8 * scale),
    width: 5 * scale,
    color: NSColor(calibratedWhite: 0.08, alpha: 1),
    alpha: 0.94
  )
  strokeLine(
    from: CGPoint(x: x + 12 * scale * direction, y: baseY + 80 * scale),
    to: CGPoint(x: x + 34 * scale * direction, y: baseY + 58 * scale),
    width: 4 * scale,
    color: NSColor(calibratedWhite: 0.08, alpha: 1),
    alpha: 0.70
  )
}

drawFigure(x: 208, baseY: 42, scale: 1.74, facingLeft: false)
drawFigure(x: 1452, baseY: 40, scale: 1.52, facingLeft: true)
drawFigure(x: 1308, baseY: 134, scale: 0.96, facingLeft: false)
drawFigure(x: 1196, baseY: 150, scale: 0.88, facingLeft: true)
drawFigure(x: 1080, baseY: 150, scale: 0.84, facingLeft: true)
drawFigure(x: 982, baseY: 148, scale: 0.82, facingLeft: false)
drawFigure(x: 884, baseY: 146, scale: 0.82, facingLeft: true)
drawFigure(x: 744, baseY: 140, scale: 0.94, facingLeft: false)
drawFigure(x: 652, baseY: 136, scale: 0.78, facingLeft: false)
drawFigure(x: 432, baseY: 154, scale: 0.72, facingLeft: true)
drawFigure(x: 1706, baseY: 132, scale: 0.70, facingLeft: false)

for x in stride(from: 100, through: 1660, by: 110) {
  fillEllipse(
    CGRect(x: CGFloat(x), y: 846 + CGFloat((x / 11) % 26), width: 3.2, height: 3.2),
    color: NSColor(calibratedWhite: 1, alpha: 0.10)
  )
}

fillGradient(
  [
    NSColor(calibratedWhite: 1, alpha: 0),
    NSColor(calibratedWhite: 1, alpha: 0.05),
  ],
  start: CGPoint(x: 896, y: 1024),
  end: CGPoint(x: 896, y: 480)
)

guard let data = rep.representation(using: .png, properties: [:]) else {
  fatalError("Failed to encode PNG data.")
}

let destination = URL(fileURLWithPath: outputPath)
try FileManager.default.createDirectory(
  at: destination.deletingLastPathComponent(),
  withIntermediateDirectories: true
)
try data.write(to: destination)

NSGraphicsContext.restoreGraphicsState()
print("Generated \(outputPath)")
