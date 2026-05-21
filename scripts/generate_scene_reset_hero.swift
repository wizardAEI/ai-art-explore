import AppKit
import CoreGraphics
import Foundation

let outputPath =
  CommandLine.arguments.dropFirst().first
  ?? "public/assets/art-tech-hero-2026-05-21-scene-reset.png"
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
  let gradient = NSGradient(colors: colors)!
  gradient.draw(from: start, to: end, options: [])
}

func fillEllipse(_ rect: CGRect, color: NSColor) {
  color.setFill()
  NSBezierPath(ovalIn: rect).fill()
}

func fillRoundedRect(_ rect: CGRect, radius: CGFloat, color: NSColor) {
  color.setFill()
  NSBezierPath(roundedRect: rect, xRadius: radius, yRadius: radius).fill()
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

func strokePath(_ points: [CGPoint], width: CGFloat, color: NSColor, alpha: CGFloat) {
  guard let first = points.first else { return }
  let path = NSBezierPath()
  path.move(to: first)
  for point in points.dropFirst() {
    let current = path.currentPoint
    path.curve(
      to: point,
      controlPoint1: CGPoint(x: (current.x + point.x) / 2, y: current.y + 42),
      controlPoint2: CGPoint(x: (current.x + point.x) / 2, y: point.y - 42)
    )
  }
  path.lineWidth = width
  path.lineCapStyle = .round
  color.withAlphaComponent(alpha).setStroke()
  path.stroke()
}

NSColor(calibratedRed: 0.02, green: 0.03, blue: 0.07, alpha: 1).setFill()
canvasRect.fill()

fillGradient(
  [
    NSColor(calibratedRed: 0.04, green: 0.06, blue: 0.12, alpha: 1),
    NSColor(calibratedRed: 0.08, green: 0.18, blue: 0.29, alpha: 1),
    NSColor(calibratedRed: 0.74, green: 0.36, blue: 0.20, alpha: 1),
  ],
  start: CGPoint(x: 160, y: 1040),
  end: CGPoint(x: 1660, y: -40)
)

fillEllipse(
  CGRect(x: -160, y: 560, width: 760, height: 460),
  color: NSColor(calibratedRed: 0.99, green: 0.82, blue: 0.62, alpha: 0.16)
)
fillEllipse(
  CGRect(x: 1030, y: 60, width: 720, height: 380),
  color: NSColor(calibratedRed: 0.46, green: 0.86, blue: 0.88, alpha: 0.11)
)
fillEllipse(
  CGRect(x: 420, y: 300, width: 980, height: 360),
  color: NSColor(calibratedRed: 0.94, green: 0.90, blue: 0.84, alpha: 0.05)
)

for y in stride(from: 860, through: 1000, by: 42) {
  strokeLine(
    from: CGPoint(x: 120, y: CGFloat(y)),
    to: CGPoint(x: 1670, y: CGFloat(y) + 8),
    width: 1,
    color: NSColor(calibratedWhite: 1, alpha: 1),
    alpha: 0.07
  )
}

let backWall = NSBezierPath()
backWall.move(to: CGPoint(x: 210, y: 260))
backWall.line(to: CGPoint(x: 1580, y: 260))
backWall.line(to: CGPoint(x: 1440, y: 850))
backWall.line(to: CGPoint(x: 350, y: 850))
backWall.close()
NSColor(calibratedRed: 0.07, green: 0.10, blue: 0.16, alpha: 0.58).setFill()
backWall.fill()

let floor = NSBezierPath()
floor.move(to: CGPoint(x: 180, y: 0))
floor.line(to: CGPoint(x: 1610, y: 0))
floor.line(to: CGPoint(x: 1440, y: 260))
floor.line(to: CGPoint(x: 350, y: 260))
floor.close()
NSColor(calibratedRed: 0.06, green: 0.09, blue: 0.15, alpha: 0.78).setFill()
floor.fill()

let runway = NSBezierPath()
runway.move(to: CGPoint(x: 658, y: 0))
runway.line(to: CGPoint(x: 1120, y: 0))
runway.line(to: CGPoint(x: 1030, y: 260))
runway.line(to: CGPoint(x: 738, y: 260))
runway.close()
NSColor(calibratedRed: 0.96, green: 0.82, blue: 0.68, alpha: 0.14).setFill()
runway.fill()

let towers: [CGRect] = [
  CGRect(x: 220, y: 246, width: 150, height: 600),
  CGRect(x: 1428, y: 246, width: 150, height: 600),
]

for tower in towers {
  fillRoundedRect(
    tower,
    radius: 36,
    color: NSColor(calibratedRed: 0.09, green: 0.12, blue: 0.19, alpha: 0.52)
  )
  for offset in stride(from: tower.minY + 36, to: tower.maxY - 24, by: 78) {
    fillRoundedRect(
      CGRect(x: tower.minX + 28, y: offset, width: tower.width - 56, height: 26),
      radius: 13,
      color: NSColor(calibratedWhite: 1, alpha: 0.08)
    )
  }
}

let panels: [CGRect] = [
  CGRect(x: 430, y: 600, width: 222, height: 164),
  CGRect(x: 710, y: 660, width: 180, height: 136),
  CGRect(x: 936, y: 620, width: 220, height: 150),
  CGRect(x: 1218, y: 586, width: 186, height: 148),
]

for (index, panel) in panels.enumerated() {
  strokeLine(
    from: CGPoint(x: panel.midX, y: 1000),
    to: CGPoint(x: panel.midX, y: panel.maxY),
    width: 1.2,
    color: NSColor(calibratedWhite: 1, alpha: 1),
    alpha: 0.15
  )
  fillRoundedRect(
    panel,
    radius: 20,
    color: index.isMultiple(of: 2)
      ? NSColor(calibratedRed: 0.97, green: 0.90, blue: 0.82, alpha: 0.12)
      : NSColor(calibratedRed: 0.54, green: 0.86, blue: 0.89, alpha: 0.12)
  )
  let frame = NSBezierPath(
    roundedRect: panel.insetBy(dx: 12, dy: 12),
    xRadius: 14,
    yRadius: 14
  )
  frame.lineWidth = 1.3
  NSColor(calibratedWhite: 1, alpha: 0.16).setStroke()
  frame.stroke()
}

let platforms: [CGRect] = [
  CGRect(x: 378, y: 332, width: 264, height: 74),
  CGRect(x: 700, y: 360, width: 190, height: 60),
  CGRect(x: 928, y: 326, width: 246, height: 70),
  CGRect(x: 1242, y: 348, width: 172, height: 64),
]

for (index, platform) in platforms.enumerated() {
  fillRoundedRect(
    platform,
    radius: 24,
    color: index.isMultiple(of: 2)
      ? NSColor(calibratedRed: 0.10, green: 0.13, blue: 0.19, alpha: 0.72)
      : NSColor(calibratedRed: 0.13, green: 0.16, blue: 0.23, alpha: 0.68)
  )
  let border = NSBezierPath(
    roundedRect: platform.insetBy(dx: 10, dy: 10),
    xRadius: 16,
    yRadius: 16
  )
  border.lineWidth = 1.1
  NSColor(calibratedWhite: 1, alpha: 0.12).setStroke()
  border.stroke()
}

let translucentWalls: [CGRect] = [
  CGRect(x: 570, y: 214, width: 110, height: 470),
  CGRect(x: 1112, y: 190, width: 116, height: 496),
]

for wall in translucentWalls {
  fillRoundedRect(
    wall,
    radius: 38,
    color: NSColor(calibratedRed: 0.95, green: 0.92, blue: 0.88, alpha: 0.08)
  )
  for x in stride(from: wall.minX + 18, to: wall.maxX - 12, by: 18) {
    strokeLine(
      from: CGPoint(x: x, y: wall.minY + 24),
      to: CGPoint(x: x + 2, y: wall.maxY - 24),
      width: 1.1,
      color: NSColor(calibratedWhite: 1, alpha: 1),
      alpha: 0.08
    )
  }
}

let silhouettes: [CGRect] = [
  CGRect(x: 640, y: 186, width: 72, height: 210),
  CGRect(x: 878, y: 168, width: 80, height: 232),
  CGRect(x: 1228, y: 192, width: 70, height: 202),
]

for figure in silhouettes {
  fillEllipse(
    CGRect(x: figure.minX + 18, y: figure.maxY - 28, width: 34, height: 34),
    color: NSColor(calibratedRed: 0.99, green: 0.92, blue: 0.82, alpha: 0.24)
  )
  NSColor(calibratedRed: 0.96, green: 0.89, blue: 0.79, alpha: 0.09).setFill()
  NSBezierPath(roundedRect: figure, xRadius: 34, yRadius: 34).fill()
}

let signalFlows: [[CGPoint]] = [
  [
    CGPoint(x: 200, y: 770),
    CGPoint(x: 480, y: 720),
    CGPoint(x: 828, y: 742),
    CGPoint(x: 1136, y: 696),
    CGPoint(x: 1552, y: 752),
  ],
  [
    CGPoint(x: 252, y: 514),
    CGPoint(x: 510, y: 478),
    CGPoint(x: 836, y: 506),
    CGPoint(x: 1204, y: 468),
    CGPoint(x: 1508, y: 514),
  ],
]

let flowColors = [
  NSColor(calibratedRed: 0.98, green: 0.84, blue: 0.66, alpha: 1),
  NSColor(calibratedRed: 0.57, green: 0.90, blue: 0.90, alpha: 1),
]

for (index, points) in signalFlows.enumerated() {
  strokePath(points, width: 10, color: flowColors[index], alpha: 0.10)
  strokePath(points, width: 5.5, color: flowColors[index], alpha: 0.22)
  strokePath(points, width: 2.8, color: flowColors[index], alpha: 0.86)
}

for x in stride(from: 320, through: 1460, by: 168) {
  fillEllipse(
    CGRect(x: CGFloat(x), y: 106, width: 18, height: 18),
    color: NSColor(calibratedRed: 0.99, green: 0.83, blue: 0.64, alpha: 0.16)
  )
}

let data = rep.representation(using: .png, properties: [:])!
try data.write(to: URL(fileURLWithPath: outputPath))
NSGraphicsContext.restoreGraphicsState()
