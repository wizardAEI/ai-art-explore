import AppKit
import CoreGraphics
import Foundation

let outputPath =
  CommandLine.arguments.dropFirst().first
  ?? "public/assets/art-tech-hero-2026-05-23-prototypes-in-public.png"
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
      controlPoint1: CGPoint(x: (current.x + point.x) / 2, y: current.y + 32),
      controlPoint2: CGPoint(x: (current.x + point.x) / 2, y: point.y - 32)
    )
  }
  path.lineWidth = width
  path.lineCapStyle = .round
  color.withAlphaComponent(alpha).setStroke()
  path.stroke()
}

NSColor(calibratedRed: 0.03, green: 0.04, blue: 0.06, alpha: 1).setFill()
canvasRect.fill()

fillGradient(
  [
    NSColor(calibratedRed: 0.05, green: 0.07, blue: 0.10, alpha: 1),
    NSColor(calibratedRed: 0.12, green: 0.20, blue: 0.18, alpha: 1),
    NSColor(calibratedRed: 0.75, green: 0.48, blue: 0.30, alpha: 1),
  ],
  start: CGPoint(x: 120, y: 1080),
  end: CGPoint(x: 1700, y: -60)
)

fillEllipse(
  CGRect(x: 82, y: 580, width: 720, height: 410),
  color: NSColor(calibratedRed: 0.84, green: 0.95, blue: 0.90, alpha: 0.12)
)
fillEllipse(
  CGRect(x: 980, y: 510, width: 620, height: 430),
  color: NSColor(calibratedRed: 0.92, green: 0.88, blue: 0.78, alpha: 0.08)
)
fillEllipse(
  CGRect(x: 1150, y: 120, width: 500, height: 240),
  color: NSColor(calibratedRed: 0.55, green: 0.82, blue: 0.78, alpha: 0.12)
)

for y in stride(from: 730, through: 996, by: 38) {
  strokeLine(
    from: CGPoint(x: 80, y: CGFloat(y)),
    to: CGPoint(x: 1712, y: CGFloat(y) - 10),
    width: 1,
    color: NSColor(calibratedWhite: 1, alpha: 1),
    alpha: 0.04
  )
}

let backHall = NSBezierPath()
backHall.move(to: CGPoint(x: 138, y: 190))
backHall.line(to: CGPoint(x: 1650, y: 190))
backHall.line(to: CGPoint(x: 1510, y: 902))
backHall.line(to: CGPoint(x: 266, y: 902))
backHall.close()
NSColor(calibratedRed: 0.05, green: 0.07, blue: 0.10, alpha: 0.52).setFill()
backHall.fill()

let floor = NSBezierPath()
floor.move(to: CGPoint(x: 64, y: 0))
floor.line(to: CGPoint(x: 1728, y: 0))
floor.line(to: CGPoint(x: 1510, y: 190))
floor.line(to: CGPoint(x: 266, y: 190))
floor.close()
NSColor(calibratedRed: 0.04, green: 0.06, blue: 0.09, alpha: 0.85).setFill()
floor.fill()

let tables: [CGRect] = [
  CGRect(x: 476, y: 248, width: 276, height: 52),
  CGRect(x: 772, y: 236, width: 268, height: 58),
  CGRect(x: 1066, y: 248, width: 258, height: 54),
]

for table in tables {
  fillRoundedRect(
    table,
    radius: 16,
    color: NSColor(calibratedRed: 0.11, green: 0.14, blue: 0.18, alpha: 0.74)
  )
  let top = NSBezierPath(
    roundedRect: table.insetBy(dx: 10, dy: 10),
    xRadius: 10,
    yRadius: 10
  )
  top.lineWidth = 1
  NSColor(calibratedWhite: 1, alpha: 0.12).setStroke()
  top.stroke()
  strokeLine(
    from: CGPoint(x: table.minX + 24, y: table.minY),
    to: CGPoint(x: table.minX + 18, y: 86),
    width: 2,
    color: NSColor(calibratedWhite: 1, alpha: 1),
    alpha: 0.18
  )
  strokeLine(
    from: CGPoint(x: table.maxX - 24, y: table.minY),
    to: CGPoint(x: table.maxX - 18, y: 84),
    width: 2,
    color: NSColor(calibratedWhite: 1, alpha: 1),
    alpha: 0.18
  )
}

let suspendedPanels: [CGRect] = [
  CGRect(x: 294, y: 468, width: 214, height: 364),
  CGRect(x: 610, y: 414, width: 248, height: 430),
  CGRect(x: 930, y: 430, width: 246, height: 402),
  CGRect(x: 1268, y: 454, width: 220, height: 352),
]

for (index, panel) in suspendedPanels.enumerated() {
  strokeLine(
    from: CGPoint(x: panel.midX, y: 1002),
    to: CGPoint(x: panel.midX, y: panel.maxY),
    width: 1.2,
    color: NSColor(calibratedWhite: 1, alpha: 1),
    alpha: 0.12
  )
  fillRoundedRect(
    panel,
    radius: 26,
    color: index.isMultiple(of: 2)
      ? NSColor(calibratedRed: 0.80, green: 0.94, blue: 0.88, alpha: 0.10)
      : NSColor(calibratedRed: 0.96, green: 0.84, blue: 0.72, alpha: 0.11)
  )
  let inner = NSBezierPath(
    roundedRect: panel.insetBy(dx: 16, dy: 16),
    xRadius: 18,
    yRadius: 18
  )
  inner.lineWidth = 1.1
  NSColor(calibratedWhite: 1, alpha: 0.14).setStroke()
  inner.stroke()
}

let screens: [CGRect] = [
  CGRect(x: 522, y: 320, width: 124, height: 92),
  CGRect(x: 846, y: 310, width: 122, height: 96),
  CGRect(x: 1146, y: 322, width: 118, height: 88),
]

for screen in screens {
  fillRoundedRect(
    screen,
    radius: 14,
    color: NSColor(calibratedRed: 0.88, green: 0.95, blue: 0.96, alpha: 0.18)
  )
  let glow = NSBezierPath(
    roundedRect: screen.insetBy(dx: 10, dy: 10),
    xRadius: 10,
    yRadius: 10
  )
  glow.lineWidth = 1
  NSColor(calibratedRed: 0.99, green: 0.95, blue: 0.86, alpha: 0.28).setStroke()
  glow.stroke()
}

let sideRooms: [CGRect] = [
  CGRect(x: 176, y: 214, width: 164, height: 628),
  CGRect(x: 1458, y: 214, width: 160, height: 628),
]

for block in sideRooms {
  fillRoundedRect(
    block,
    radius: 30,
    color: NSColor(calibratedRed: 0.07, green: 0.10, blue: 0.15, alpha: 0.54)
  )
  for offset in stride(from: block.minY + 40, to: block.maxY - 30, by: 74) {
    fillRoundedRect(
      CGRect(x: block.minX + 22, y: offset, width: block.width - 44, height: 18),
      radius: 9,
      color: NSColor(calibratedWhite: 1, alpha: 0.08)
    )
  }
}

let silhouettes: [CGRect] = [
  CGRect(x: 420, y: 146, width: 70, height: 200),
  CGRect(x: 700, y: 130, width: 76, height: 218),
  CGRect(x: 982, y: 138, width: 76, height: 210),
  CGRect(x: 1334, y: 160, width: 68, height: 198),
]

for figure in silhouettes {
  fillEllipse(
    CGRect(x: figure.minX + 16, y: figure.maxY - 28, width: 36, height: 36),
    color: NSColor(calibratedRed: 0.99, green: 0.94, blue: 0.85, alpha: 0.24)
  )
  NSColor(calibratedRed: 0.97, green: 0.92, blue: 0.84, alpha: 0.08).setFill()
  NSBezierPath(roundedRect: figure, xRadius: 32, yRadius: 32).fill()
}

let pathways: [[CGPoint]] = [
  [
    CGPoint(x: 198, y: 722),
    CGPoint(x: 432, y: 688),
    CGPoint(x: 704, y: 714),
    CGPoint(x: 992, y: 676),
    CGPoint(x: 1462, y: 712),
  ],
  [
    CGPoint(x: 230, y: 560),
    CGPoint(x: 508, y: 528),
    CGPoint(x: 806, y: 552),
    CGPoint(x: 1126, y: 520),
    CGPoint(x: 1490, y: 540),
  ],
  [
    CGPoint(x: 282, y: 404),
    CGPoint(x: 560, y: 374),
    CGPoint(x: 864, y: 396),
    CGPoint(x: 1188, y: 362),
    CGPoint(x: 1448, y: 382),
  ],
]

for (index, path) in pathways.enumerated() {
  strokePath(
    path,
    width: index == 1 ? 3.6 : 2.4,
    color: index == 1
      ? NSColor(calibratedRed: 0.73, green: 0.93, blue: 0.87, alpha: 1)
      : NSColor(calibratedRed: 0.98, green: 0.84, blue: 0.70, alpha: 1),
    alpha: index == 1 ? 0.34 : 0.24
  )
}

let nodes: [CGRect] = [
  CGRect(x: 474, y: 678, width: 70, height: 70),
  CGRect(x: 804, y: 532, width: 60, height: 60),
  CGRect(x: 1130, y: 352, width: 58, height: 58),
]

for node in nodes {
  fillEllipse(
    node,
    color: NSColor(calibratedRed: 0.90, green: 0.97, blue: 0.92, alpha: 0.18)
  )
  fillEllipse(
    node.insetBy(dx: 14, dy: 14),
    color: NSColor(calibratedRed: 0.98, green: 0.86, blue: 0.72, alpha: 0.26)
  )
}

for index in 0..<8 {
  let reflection = CGRect(
    x: 330 + CGFloat(index) * 136,
    y: 118 - CGFloat(index % 2) * 10,
    width: 108,
    height: 16
  )
  fillRoundedRect(
    reflection,
    radius: 8,
    color: NSColor(calibratedRed: 0.72, green: 0.90, blue: 0.84, alpha: 0.10)
  )
}

let data = rep.representation(using: .png, properties: [:])!
try data.write(to: URL(fileURLWithPath: outputPath))
NSGraphicsContext.restoreGraphicsState()
