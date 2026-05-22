import AppKit
import CoreGraphics
import Foundation

let outputPath =
  CommandLine.arguments.dropFirst().first
  ?? "public/assets/art-tech-hero-2026-05-22-interfaces-enter-space.png"
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
      controlPoint1: CGPoint(x: (current.x + point.x) / 2, y: current.y + 34),
      controlPoint2: CGPoint(x: (current.x + point.x) / 2, y: point.y - 34)
    )
  }
  path.lineWidth = width
  path.lineCapStyle = .round
  color.withAlphaComponent(alpha).setStroke()
  path.stroke()
}

NSColor(calibratedRed: 0.03, green: 0.05, blue: 0.08, alpha: 1).setFill()
canvasRect.fill()

fillGradient(
  [
    NSColor(calibratedRed: 0.05, green: 0.08, blue: 0.12, alpha: 1),
    NSColor(calibratedRed: 0.12, green: 0.22, blue: 0.24, alpha: 1),
    NSColor(calibratedRed: 0.80, green: 0.52, blue: 0.30, alpha: 1),
  ],
  start: CGPoint(x: 120, y: 1080),
  end: CGPoint(x: 1680, y: -80)
)

fillEllipse(
  CGRect(x: -120, y: 650, width: 720, height: 420),
  color: NSColor(calibratedRed: 0.89, green: 0.95, blue: 0.82, alpha: 0.14)
)
fillEllipse(
  CGRect(x: 1160, y: 110, width: 620, height: 310),
  color: NSColor(calibratedRed: 0.52, green: 0.86, blue: 0.82, alpha: 0.13)
)
fillEllipse(
  CGRect(x: 510, y: 260, width: 860, height: 320),
  color: NSColor(calibratedRed: 0.97, green: 0.89, blue: 0.76, alpha: 0.05)
)

for y in stride(from: 758, through: 1002, by: 40) {
  strokeLine(
    from: CGPoint(x: 110, y: CGFloat(y)),
    to: CGPoint(x: 1690, y: CGFloat(y) - 8),
    width: 1,
    color: NSColor(calibratedWhite: 1, alpha: 1),
    alpha: 0.05
  )
}

let backWall = NSBezierPath()
backWall.move(to: CGPoint(x: 180, y: 230))
backWall.line(to: CGPoint(x: 1610, y: 230))
backWall.line(to: CGPoint(x: 1450, y: 888))
backWall.line(to: CGPoint(x: 342, y: 888))
backWall.close()
NSColor(calibratedRed: 0.07, green: 0.10, blue: 0.15, alpha: 0.56).setFill()
backWall.fill()

let floor = NSBezierPath()
floor.move(to: CGPoint(x: 130, y: 0))
floor.line(to: CGPoint(x: 1650, y: 0))
floor.line(to: CGPoint(x: 1450, y: 230))
floor.line(to: CGPoint(x: 342, y: 230))
floor.close()
NSColor(calibratedRed: 0.05, green: 0.08, blue: 0.12, alpha: 0.82).setFill()
floor.fill()

let corridor = NSBezierPath()
corridor.move(to: CGPoint(x: 676, y: 0))
corridor.line(to: CGPoint(x: 1110, y: 0))
corridor.line(to: CGPoint(x: 1008, y: 230))
corridor.line(to: CGPoint(x: 774, y: 230))
corridor.close()
NSColor(calibratedRed: 0.98, green: 0.86, blue: 0.76, alpha: 0.12).setFill()
corridor.fill()

let sideBlocks: [CGRect] = [
  CGRect(x: 198, y: 220, width: 140, height: 628),
  CGRect(x: 1454, y: 220, width: 132, height: 628),
]

for block in sideBlocks {
  fillRoundedRect(
    block,
    radius: 34,
    color: NSColor(calibratedRed: 0.08, green: 0.12, blue: 0.18, alpha: 0.62)
  )
  for offset in stride(from: block.minY + 34, to: block.maxY - 24, by: 72) {
    fillRoundedRect(
      CGRect(x: block.minX + 22, y: offset, width: block.width - 44, height: 20),
      radius: 10,
      color: NSColor(calibratedWhite: 1, alpha: 0.08)
    )
  }
}

let screens: [CGRect] = [
  CGRect(x: 434, y: 636, width: 252, height: 166),
  CGRect(x: 748, y: 684, width: 202, height: 138),
  CGRect(x: 1010, y: 626, width: 224, height: 168),
  CGRect(x: 1288, y: 576, width: 164, height: 148),
]

for (index, screen) in screens.enumerated() {
  strokeLine(
    from: CGPoint(x: screen.midX, y: 1008),
    to: CGPoint(x: screen.midX, y: screen.maxY),
    width: 1.2,
    color: NSColor(calibratedWhite: 1, alpha: 1),
    alpha: 0.13
  )
  fillRoundedRect(
    screen,
    radius: 24,
    color: index.isMultiple(of: 2)
      ? NSColor(calibratedRed: 0.72, green: 0.94, blue: 0.88, alpha: 0.12)
      : NSColor(calibratedRed: 0.98, green: 0.86, blue: 0.78, alpha: 0.11)
  )
  let inset = NSBezierPath(
    roundedRect: screen.insetBy(dx: 14, dy: 14),
    xRadius: 16,
    yRadius: 16
  )
  inset.lineWidth = 1.2
  NSColor(calibratedWhite: 1, alpha: 0.16).setStroke()
  inset.stroke()
}

let panels: [CGRect] = [
  CGRect(x: 544, y: 204, width: 96, height: 508),
  CGRect(x: 1126, y: 184, width: 114, height: 520),
]

for panel in panels {
  fillRoundedRect(
    panel,
    radius: 42,
    color: NSColor(calibratedRed: 0.90, green: 0.95, blue: 0.92, alpha: 0.08)
  )
  for x in stride(from: panel.minX + 18, to: panel.maxX - 12, by: 16) {
    strokeLine(
      from: CGPoint(x: x, y: panel.minY + 22),
      to: CGPoint(x: x + 4, y: panel.maxY - 22),
      width: 1.1,
      color: NSColor(calibratedWhite: 1, alpha: 1),
      alpha: 0.08
    )
  }
}

let stations: [CGRect] = [
  CGRect(x: 374, y: 320, width: 256, height: 76),
  CGRect(x: 696, y: 350, width: 210, height: 64),
  CGRect(x: 958, y: 318, width: 252, height: 76),
  CGRect(x: 1260, y: 342, width: 176, height: 66),
]

for (index, station) in stations.enumerated() {
  fillRoundedRect(
    station,
    radius: 22,
    color: index.isMultiple(of: 2)
      ? NSColor(calibratedRed: 0.10, green: 0.14, blue: 0.20, alpha: 0.72)
      : NSColor(calibratedRed: 0.14, green: 0.18, blue: 0.24, alpha: 0.70)
  )
  let border = NSBezierPath(
    roundedRect: station.insetBy(dx: 10, dy: 10),
    xRadius: 14,
    yRadius: 14
  )
  border.lineWidth = 1.05
  NSColor(calibratedWhite: 1, alpha: 0.11).setStroke()
  border.stroke()
}

let silhouettes: [CGRect] = [
  CGRect(x: 640, y: 170, width: 72, height: 214),
  CGRect(x: 862, y: 156, width: 82, height: 236),
  CGRect(x: 1218, y: 182, width: 70, height: 206),
]

for figure in silhouettes {
  fillEllipse(
    CGRect(x: figure.minX + 18, y: figure.maxY - 28, width: 34, height: 34),
    color: NSColor(calibratedRed: 0.99, green: 0.93, blue: 0.84, alpha: 0.24)
  )
  NSColor(calibratedRed: 0.96, green: 0.91, blue: 0.82, alpha: 0.08).setFill()
  NSBezierPath(roundedRect: figure, xRadius: 34, yRadius: 34).fill()
}

let interfaceFlows: [[CGPoint]] = [
  [
    CGPoint(x: 178, y: 746),
    CGPoint(x: 486, y: 704),
    CGPoint(x: 814, y: 732),
    CGPoint(x: 1142, y: 690),
    CGPoint(x: 1572, y: 732),
  ],
  [
    CGPoint(x: 236, y: 566),
    CGPoint(x: 478, y: 528),
    CGPoint(x: 822, y: 560),
    CGPoint(x: 1186, y: 522),
    CGPoint(x: 1502, y: 548),
  ],
  [
    CGPoint(x: 324, y: 432),
    CGPoint(x: 636, y: 392),
    CGPoint(x: 896, y: 418),
    CGPoint(x: 1248, y: 386),
    CGPoint(x: 1474, y: 404),
  ],
]

for (index, flow) in interfaceFlows.enumerated() {
  strokePath(
    flow,
    width: index == 1 ? 3.4 : 2.2,
    color: index == 1
      ? NSColor(calibratedRed: 0.74, green: 0.95, blue: 0.88, alpha: 1)
      : NSColor(calibratedRed: 0.98, green: 0.84, blue: 0.72, alpha: 1),
    alpha: index == 1 ? 0.34 : 0.24
  )
}

let apertures: [CGRect] = [
  CGRect(x: 468, y: 722, width: 72, height: 72),
  CGRect(x: 850, y: 556, width: 64, height: 64),
  CGRect(x: 1186, y: 394, width: 58, height: 58),
]

for aperture in apertures {
  fillEllipse(
    aperture,
    color: NSColor(calibratedRed: 0.92, green: 0.98, blue: 0.92, alpha: 0.18)
  )
  fillEllipse(
    aperture.insetBy(dx: 14, dy: 14),
    color: NSColor(calibratedRed: 0.98, green: 0.86, blue: 0.72, alpha: 0.25)
  )
}

for index in 0..<7 {
  let glow = CGRect(
    x: 346 + CGFloat(index) * 154,
    y: 120 - CGFloat(index % 2) * 12,
    width: 116,
    height: 18
  )
  fillRoundedRect(
    glow,
    radius: 9,
    color: NSColor(calibratedRed: 0.72, green: 0.92, blue: 0.86, alpha: 0.12)
  )
}

let data = rep.representation(using: .png, properties: [:])!
try data.write(to: URL(fileURLWithPath: outputPath))
NSGraphicsContext.restoreGraphicsState()
