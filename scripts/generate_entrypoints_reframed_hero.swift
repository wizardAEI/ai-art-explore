import AppKit
import CoreGraphics
import Foundation

let outputPath =
  CommandLine.arguments.dropFirst().first
  ?? "public/assets/art-tech-hero-2026-05-19-entrypoints-reframed.png"
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

NSColor(calibratedRed: 0.03, green: 0.05, blue: 0.08, alpha: 1).setFill()
canvasRect.fill()

fillGradient(
  [
    NSColor(calibratedRed: 0.04, green: 0.07, blue: 0.12, alpha: 1),
    NSColor(calibratedRed: 0.08, green: 0.16, blue: 0.24, alpha: 1),
    NSColor(calibratedRed: 0.45, green: 0.20, blue: 0.18, alpha: 1),
  ],
  start: CGPoint(x: 140, y: 1020),
  end: CGPoint(x: 1640, y: 40)
)

fillEllipse(
  CGRect(x: -90, y: 620, width: 620, height: 330),
  color: NSColor(calibratedRed: 0.95, green: 0.74, blue: 0.52, alpha: 0.14)
)
fillEllipse(
  CGRect(x: 1100, y: 150, width: 560, height: 340),
  color: NSColor(calibratedRed: 0.47, green: 0.85, blue: 0.91, alpha: 0.13)
)
fillEllipse(
  CGRect(x: 560, y: 370, width: 700, height: 250),
  color: NSColor(calibratedRed: 0.96, green: 0.93, blue: 0.84, alpha: 0.06)
)

for x in stride(from: 94, through: 1700, by: 132) {
  strokeLine(
    from: CGPoint(x: CGFloat(x), y: 44),
    to: CGPoint(x: CGFloat(x) + 86, y: 1000),
    width: 1,
    color: NSColor(calibratedWhite: 1, alpha: 1),
    alpha: 0.055
  )
}

for y in stride(from: 136, through: 920, by: 92) {
  strokeLine(
    from: CGPoint(x: 74, y: CGFloat(y)),
    to: CGPoint(x: 1718, y: CGFloat(y) + 14),
    width: 1,
    color: NSColor(calibratedRed: 0.95, green: 0.88, blue: 0.80, alpha: 1),
    alpha: 0.05
  )
}

let floorPlane = NSBezierPath()
floorPlane.move(to: CGPoint(x: 328, y: 0))
floorPlane.line(to: CGPoint(x: 1464, y: 0))
floorPlane.line(to: CGPoint(x: 1210, y: 370))
floorPlane.line(to: CGPoint(x: 580, y: 370))
floorPlane.close()
NSColor(calibratedRed: 0.12, green: 0.16, blue: 0.22, alpha: 0.62).setFill()
floorPlane.fill()

let floorCore = NSBezierPath()
floorCore.move(to: CGPoint(x: 544, y: 0))
floorCore.line(to: CGPoint(x: 1248, y: 0))
floorCore.line(to: CGPoint(x: 1102, y: 370))
floorCore.line(to: CGPoint(x: 694, y: 370))
floorCore.close()
NSColor(calibratedRed: 0.96, green: 0.82, blue: 0.68, alpha: 0.14).setFill()
floorCore.fill()

let portals: [CGRect] = [
  CGRect(x: 188, y: 224, width: 176, height: 462),
  CGRect(x: 452, y: 202, width: 142, height: 382),
  CGRect(x: 672, y: 170, width: 214, height: 476),
  CGRect(x: 946, y: 208, width: 176, height: 404),
  CGRect(x: 1200, y: 186, width: 246, height: 442),
]

let portalColors: [NSColor] = [
  NSColor(calibratedRed: 0.94, green: 0.80, blue: 0.60, alpha: 0.16),
  NSColor(calibratedRed: 0.58, green: 0.84, blue: 0.90, alpha: 0.14),
  NSColor(calibratedRed: 0.97, green: 0.95, blue: 0.88, alpha: 0.09),
]

for (index, portal) in portals.enumerated() {
  fillRoundedRect(portal, radius: 26, color: portalColors[index % portalColors.count])
  let inner = NSBezierPath(roundedRect: portal.insetBy(dx: 15, dy: 18), xRadius: 20, yRadius: 20)
  inner.lineWidth = 1.2
  NSColor(calibratedWhite: 1, alpha: 0.14).setStroke()
  inner.stroke()

  let core = portal.insetBy(dx: 42, dy: 48)
  fillRoundedRect(
    core,
    radius: 18,
    color: index.isMultiple(of: 2)
      ? NSColor(calibratedRed: 0.10, green: 0.14, blue: 0.20, alpha: 0.28)
      : NSColor(calibratedRed: 0.13, green: 0.18, blue: 0.24, alpha: 0.26)
  )

  for offset in stride(from: portal.minY + 36, to: portal.maxY - 30, by: 50) {
    strokeLine(
      from: CGPoint(x: portal.minX + 18, y: offset),
      to: CGPoint(x: portal.maxX - 20, y: offset + CGFloat(index.isMultiple(of: 2) ? 10 : -8)),
      width: 1,
      color: NSColor(calibratedWhite: 1, alpha: 1),
      alpha: 0.08
    )
  }
}

let workshopTables: [CGRect] = [
  CGRect(x: 224, y: 496, width: 420, height: 78),
  CGRect(x: 760, y: 448, width: 352, height: 70),
  CGRect(x: 1184, y: 478, width: 314, height: 74),
]

for table in workshopTables {
  fillRoundedRect(
    table,
    radius: 22,
    color: NSColor(calibratedRed: 0.09, green: 0.12, blue: 0.18, alpha: 0.70)
  )
  let border = NSBezierPath(roundedRect: table.insetBy(dx: 10, dy: 10), xRadius: 16, yRadius: 16)
  border.lineWidth = 1.0
  NSColor(calibratedWhite: 1, alpha: 0.11).setStroke()
  border.stroke()
}

let suspendedFrames: [CGRect] = [
  CGRect(x: 260, y: 720, width: 196, height: 110),
  CGRect(x: 860, y: 730, width: 180, height: 100),
  CGRect(x: 1294, y: 698, width: 214, height: 126),
]

for frame in suspendedFrames {
  strokeLine(
    from: CGPoint(x: frame.midX, y: 980),
    to: CGPoint(x: frame.midX, y: frame.maxY),
    width: 1.2,
    color: NSColor(calibratedWhite: 1, alpha: 1),
    alpha: 0.12
  )
  fillRoundedRect(
    frame,
    radius: 18,
    color: NSColor(calibratedRed: 0.96, green: 0.89, blue: 0.78, alpha: 0.12)
  )
  let inset = NSBezierPath(roundedRect: frame.insetBy(dx: 12, dy: 12), xRadius: 12, yRadius: 12)
  inset.lineWidth = 1.2
  NSColor(calibratedRed: 0.66, green: 0.88, blue: 0.94, alpha: 0.18).setStroke()
  inset.stroke()
}

let lightPaths: [[CGPoint]] = [
  [
    CGPoint(x: 146, y: 804),
    CGPoint(x: 390, y: 742),
    CGPoint(x: 706, y: 776),
    CGPoint(x: 1090, y: 720),
    CGPoint(x: 1534, y: 782),
  ],
  [
    CGPoint(x: 220, y: 622),
    CGPoint(x: 504, y: 580),
    CGPoint(x: 834, y: 614),
    CGPoint(x: 1184, y: 566),
    CGPoint(x: 1494, y: 606),
  ],
]

let glowColors: [NSColor] = [
  NSColor(calibratedRed: 0.98, green: 0.86, blue: 0.70, alpha: 1),
  NSColor(calibratedRed: 0.66, green: 0.90, blue: 0.95, alpha: 1),
]

for (index, points) in lightPaths.enumerated() {
  let path = NSBezierPath()
  path.move(to: points[0])
  for point in points.dropFirst() {
    path.curve(
      to: point,
      controlPoint1: CGPoint(x: (path.currentPoint.x + point.x) / 2, y: path.currentPoint.y + 44),
      controlPoint2: CGPoint(x: (path.currentPoint.x + point.x) / 2, y: point.y - 44)
    )
  }
  path.lineWidth = 10
  path.lineCapStyle = .round
  glowColors[index].withAlphaComponent(0.26).setStroke()
  path.stroke()

  path.lineWidth = 3
  glowColors[index].withAlphaComponent(0.72).setStroke()
  path.stroke()
}

let figures: [CGRect] = [
  CGRect(x: 638, y: 98, width: 56, height: 206),
  CGRect(x: 848, y: 122, width: 64, height: 230),
  CGRect(x: 1074, y: 102, width: 54, height: 194),
]

for figure in figures {
  fillRoundedRect(
    figure,
    radius: 24,
    color: NSColor(calibratedRed: 0.07, green: 0.09, blue: 0.12, alpha: 0.86)
  )
  fillEllipse(
    CGRect(x: figure.minX + 8, y: figure.maxY - 4, width: figure.width - 16, height: 42),
    color: NSColor(calibratedRed: 0.07, green: 0.09, blue: 0.12, alpha: 0.86)
  )
}

for _ in 0..<2200 {
  let x = CGFloat.random(in: 0..<CGFloat(width))
  let y = CGFloat.random(in: 0..<CGFloat(height))
  let size = CGFloat.random(in: 0.5...1.8)
  fillEllipse(
    CGRect(x: x, y: y, width: size, height: size),
    color: NSColor(calibratedWhite: 1, alpha: CGFloat.random(in: 0.02...0.07))
  )
}

fillGradient(
  [
    NSColor(calibratedRed: 0.02, green: 0.03, blue: 0.04, alpha: 0),
    NSColor(calibratedRed: 0.02, green: 0.03, blue: 0.04, alpha: 0.62),
  ],
  start: CGPoint(x: 0, y: 310),
  end: CGPoint(x: 0, y: 0)
)

NSGraphicsContext.restoreGraphicsState()

let outputURL = URL(fileURLWithPath: outputPath)
try FileManager.default.createDirectory(
  at: outputURL.deletingLastPathComponent(),
  withIntermediateDirectories: true
)

if let data = rep.representation(using: .png, properties: [:]) {
  try data.write(to: outputURL)
} else {
  fputs("Failed to encode PNG\n", stderr)
  exit(1)
}
