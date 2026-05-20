import AppKit
import CoreGraphics
import Foundation

let outputPath =
  CommandLine.arguments.dropFirst().first
  ?? "public/assets/art-tech-hero-2026-05-20-authorship-shift.png"
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

NSColor(calibratedRed: 0.03, green: 0.03, blue: 0.05, alpha: 1).setFill()
canvasRect.fill()

fillGradient(
  [
    NSColor(calibratedRed: 0.08, green: 0.10, blue: 0.18, alpha: 1),
    NSColor(calibratedRed: 0.11, green: 0.22, blue: 0.30, alpha: 1),
    NSColor(calibratedRed: 0.56, green: 0.28, blue: 0.19, alpha: 1),
  ],
  start: CGPoint(x: 120, y: 1024),
  end: CGPoint(x: 1710, y: 0)
)

fillEllipse(
  CGRect(x: -120, y: 570, width: 700, height: 420),
  color: NSColor(calibratedRed: 0.98, green: 0.78, blue: 0.55, alpha: 0.18)
)
fillEllipse(
  CGRect(x: 1080, y: 120, width: 620, height: 340),
  color: NSColor(calibratedRed: 0.49, green: 0.80, blue: 0.88, alpha: 0.13)
)
fillEllipse(
  CGRect(x: 480, y: 360, width: 820, height: 300),
  color: NSColor(calibratedRed: 0.95, green: 0.91, blue: 0.82, alpha: 0.08)
)

for x in stride(from: 70, through: 1720, by: 110) {
  strokeLine(
    from: CGPoint(x: CGFloat(x), y: 42),
    to: CGPoint(x: CGFloat(x) + 46, y: 1000),
    width: 1,
    color: NSColor(calibratedWhite: 1, alpha: 1),
    alpha: 0.055
  )
}

let floorPlane = NSBezierPath()
floorPlane.move(to: CGPoint(x: 240, y: 0))
floorPlane.line(to: CGPoint(x: 1550, y: 0))
floorPlane.line(to: CGPoint(x: 1270, y: 350))
floorPlane.line(to: CGPoint(x: 540, y: 350))
floorPlane.close()
NSColor(calibratedRed: 0.09, green: 0.12, blue: 0.18, alpha: 0.66).setFill()
floorPlane.fill()

let aisle = NSBezierPath()
aisle.move(to: CGPoint(x: 650, y: 0))
aisle.line(to: CGPoint(x: 1140, y: 0))
aisle.line(to: CGPoint(x: 1020, y: 350))
aisle.line(to: CGPoint(x: 770, y: 350))
aisle.close()
NSColor(calibratedRed: 0.95, green: 0.80, blue: 0.67, alpha: 0.14).setFill()
aisle.fill()

let tables: [CGRect] = [
  CGRect(x: 180, y: 472, width: 350, height: 84),
  CGRect(x: 596, y: 446, width: 290, height: 76),
  CGRect(x: 1014, y: 456, width: 330, height: 78),
  CGRect(x: 1376, y: 482, width: 220, height: 72),
]

for (index, table) in tables.enumerated() {
  fillRoundedRect(
    table,
    radius: 24,
    color: index.isMultiple(of: 2)
      ? NSColor(calibratedRed: 0.10, green: 0.13, blue: 0.19, alpha: 0.76)
      : NSColor(calibratedRed: 0.12, green: 0.15, blue: 0.22, alpha: 0.72)
  )
  let border = NSBezierPath(
    roundedRect: table.insetBy(dx: 9, dy: 9),
    xRadius: 16,
    yRadius: 16
  )
  border.lineWidth = 1.1
  NSColor(calibratedWhite: 1, alpha: 0.13).setStroke()
  border.stroke()
}

let screens: [CGRect] = [
  CGRect(x: 154, y: 674, width: 224, height: 124),
  CGRect(x: 500, y: 724, width: 190, height: 110),
  CGRect(x: 860, y: 690, width: 232, height: 132),
  CGRect(x: 1232, y: 716, width: 202, height: 116),
]

for (index, frame) in screens.enumerated() {
  strokeLine(
    from: CGPoint(x: frame.midX, y: 984),
    to: CGPoint(x: frame.midX, y: frame.maxY),
    width: 1.1,
    color: NSColor(calibratedWhite: 1, alpha: 1),
    alpha: 0.14
  )
  fillRoundedRect(
    frame,
    radius: 18,
    color: index.isMultiple(of: 2)
      ? NSColor(calibratedRed: 0.96, green: 0.89, blue: 0.78, alpha: 0.14)
      : NSColor(calibratedRed: 0.57, green: 0.84, blue: 0.89, alpha: 0.12)
  )
  let inset = NSBezierPath(
    roundedRect: frame.insetBy(dx: 12, dy: 12),
    xRadius: 12,
    yRadius: 12
  )
  inset.lineWidth = 1.2
  NSColor(calibratedWhite: 1, alpha: 0.14).setStroke()
  inset.stroke()
}

let curtains: [CGRect] = [
  CGRect(x: 412, y: 180, width: 86, height: 554),
  CGRect(x: 1116, y: 164, width: 94, height: 570),
]

for drape in curtains {
  fillRoundedRect(
    drape,
    radius: 40,
    color: NSColor(calibratedRed: 0.95, green: 0.91, blue: 0.84, alpha: 0.08)
  )
  for offset in stride(from: drape.minX + 16, to: drape.maxX - 8, by: 18) {
    strokeLine(
      from: CGPoint(x: offset, y: drape.minY + 20),
      to: CGPoint(x: offset + 2, y: drape.maxY - 20),
      width: 1.2,
      color: NSColor(calibratedWhite: 1, alpha: 1),
      alpha: 0.08
    )
  }
}

let silhouettes: [CGRect] = [
  CGRect(x: 614, y: 242, width: 70, height: 208),
  CGRect(x: 942, y: 220, width: 72, height: 220),
  CGRect(x: 1288, y: 252, width: 66, height: 198),
]

for figure in silhouettes {
  let head = CGRect(x: figure.minX + 18, y: figure.maxY - 34, width: 32, height: 32)
  fillEllipse(head, color: NSColor(calibratedRed: 0.99, green: 0.91, blue: 0.80, alpha: 0.28))

  let body = NSBezierPath(roundedRect: figure, xRadius: 34, yRadius: 34)
  NSColor(calibratedRed: 0.94, green: 0.86, blue: 0.76, alpha: 0.10).setFill()
  body.fill()
}

let flows: [[CGPoint]] = [
  [
    CGPoint(x: 110, y: 820),
    CGPoint(x: 390, y: 760),
    CGPoint(x: 710, y: 782),
    CGPoint(x: 1064, y: 732),
    CGPoint(x: 1508, y: 790),
  ],
  [
    CGPoint(x: 196, y: 624),
    CGPoint(x: 482, y: 584),
    CGPoint(x: 826, y: 618),
    CGPoint(x: 1204, y: 564),
    CGPoint(x: 1570, y: 618),
  ],
]

let glowColors: [NSColor] = [
  NSColor(calibratedRed: 0.98, green: 0.85, blue: 0.68, alpha: 1),
  NSColor(calibratedRed: 0.61, green: 0.88, blue: 0.94, alpha: 1),
]

for (index, points) in flows.enumerated() {
  let path = NSBezierPath()
  path.move(to: points[0])
  for point in points.dropFirst() {
    path.curve(
      to: point,
      controlPoint1: CGPoint(x: (path.currentPoint.x + point.x) / 2, y: path.currentPoint.y + 36),
      controlPoint2: CGPoint(x: (path.currentPoint.x + point.x) / 2, y: point.y - 36)
    )
  }
  path.lineWidth = 11
  path.lineCapStyle = .round

  glowColors[index].withAlphaComponent(0.12).setStroke()
  path.stroke()

  path.lineWidth = 6.4
  glowColors[index].withAlphaComponent(0.26).setStroke()
  path.stroke()

  path.lineWidth = 3.4
  glowColors[index].withAlphaComponent(0.88).setStroke()
  path.stroke()
}

for x in stride(from: 234, through: 1510, by: 190) {
  fillEllipse(
    CGRect(x: CGFloat(x), y: 138, width: 22, height: 22),
    color: NSColor(calibratedRed: 0.99, green: 0.84, blue: 0.66, alpha: 0.18)
  )
}

let data = rep.representation(using: .png, properties: [:])!
let outputURL = URL(fileURLWithPath: outputPath)
try FileManager.default.createDirectory(
  at: outputURL.deletingLastPathComponent(),
  withIntermediateDirectories: true
)
try data.write(to: outputURL)

NSGraphicsContext.restoreGraphicsState()
