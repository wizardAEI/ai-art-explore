import AppKit
import CoreGraphics
import Foundation

let outputPath =
  CommandLine.arguments.dropFirst().first
  ?? "public/assets/art-tech-hero-2026-05-18-sensory-prototypes.png"
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
    NSColor(calibratedRed: 0.06, green: 0.11, blue: 0.18, alpha: 1),
    NSColor(calibratedRed: 0.10, green: 0.19, blue: 0.28, alpha: 1),
    NSColor(calibratedRed: 0.66, green: 0.36, blue: 0.19, alpha: 1),
  ],
  start: CGPoint(x: 160, y: 980),
  end: CGPoint(x: 1540, y: 80)
)

fillEllipse(
  CGRect(x: -120, y: 560, width: 760, height: 420),
  color: NSColor(calibratedRed: 0.99, green: 0.76, blue: 0.51, alpha: 0.18)
)
fillEllipse(
  CGRect(x: 1110, y: 120, width: 540, height: 340),
  color: NSColor(calibratedRed: 0.44, green: 0.80, blue: 0.92, alpha: 0.18)
)
fillEllipse(
  CGRect(x: 520, y: 430, width: 760, height: 260),
  color: NSColor(calibratedRed: 0.94, green: 0.95, blue: 0.90, alpha: 0.07)
)

for x in stride(from: 96, through: 1680, by: 122) {
  strokeLine(
    from: CGPoint(x: CGFloat(x), y: 80),
    to: CGPoint(x: CGFloat(x) + 54, y: 980),
    width: 1,
    color: NSColor(calibratedWhite: 1, alpha: 1),
    alpha: 0.05
  )
}

for y in stride(from: 180, through: 900, by: 84) {
  strokeLine(
    from: CGPoint(x: 96, y: CGFloat(y)),
    to: CGPoint(x: 1690, y: CGFloat(y) + 18),
    width: 1,
    color: NSColor(calibratedRed: 0.96, green: 0.90, blue: 0.82, alpha: 1),
    alpha: 0.05
  )
}

let stagePlanes: [CGRect] = [
  CGRect(x: 118, y: 596, width: 1540, height: 108),
  CGRect(x: 184, y: 454, width: 1410, height: 92),
  CGRect(x: 252, y: 330, width: 1280, height: 76),
]

for (index, plane) in stagePlanes.enumerated() {
  fillRoundedRect(
    plane,
    radius: 30,
    color: index == 0
      ? NSColor(calibratedRed: 0.10, green: 0.15, blue: 0.21, alpha: 0.68)
      : NSColor(calibratedRed: 0.13, green: 0.19, blue: 0.26, alpha: 0.52)
  )
  let border = NSBezierPath(roundedRect: plane.insetBy(dx: 12, dy: 12), xRadius: 22, yRadius: 22)
  border.lineWidth = 1.2
  NSColor(calibratedWhite: 1, alpha: 0.12).setStroke()
  border.stroke()
}

let lightRibbons: [[CGPoint]] = [
  [
    CGPoint(x: 150, y: 700),
    CGPoint(x: 440, y: 760),
    CGPoint(x: 760, y: 742),
    CGPoint(x: 1110, y: 806),
    CGPoint(x: 1540, y: 760),
  ],
  [
    CGPoint(x: 220, y: 536),
    CGPoint(x: 520, y: 590),
    CGPoint(x: 820, y: 576),
    CGPoint(x: 1180, y: 628),
    CGPoint(x: 1490, y: 586),
  ],
  [
    CGPoint(x: 288, y: 402),
    CGPoint(x: 560, y: 444),
    CGPoint(x: 840, y: 432),
    CGPoint(x: 1130, y: 468),
    CGPoint(x: 1460, y: 444),
  ],
]

let ribbonColors: [NSColor] = [
  NSColor(calibratedRed: 0.98, green: 0.84, blue: 0.68, alpha: 1),
  NSColor(calibratedRed: 0.70, green: 0.90, blue: 0.95, alpha: 1),
  NSColor(calibratedRed: 0.99, green: 0.95, blue: 0.84, alpha: 1),
]

for (index, points) in lightRibbons.enumerated() {
  let path = NSBezierPath()
  path.move(to: points[0])
  for point in points.dropFirst() {
    path.curve(
      to: point,
      controlPoint1: CGPoint(x: (path.currentPoint.x + point.x) / 2, y: path.currentPoint.y + 42),
      controlPoint2: CGPoint(x: (path.currentPoint.x + point.x) / 2, y: point.y - 42)
    )
  }
  path.lineWidth = 10
  path.lineCapStyle = .round
  ribbonColors[index].withAlphaComponent(0.30).setStroke()
  path.stroke()

  path.lineWidth = 3.2
  ribbonColors[index].withAlphaComponent(0.78).setStroke()
  path.stroke()
}

let panels: [CGRect] = [
  CGRect(x: 182, y: 198, width: 178, height: 456),
  CGRect(x: 446, y: 232, width: 146, height: 382),
  CGRect(x: 680, y: 174, width: 218, height: 450),
  CGRect(x: 958, y: 214, width: 182, height: 400),
  CGRect(x: 1218, y: 190, width: 232, height: 438),
]

let panelColors: [NSColor] = [
  NSColor(calibratedRed: 0.98, green: 0.89, blue: 0.75, alpha: 0.17),
  NSColor(calibratedRed: 0.64, green: 0.86, blue: 0.92, alpha: 0.14),
  NSColor(calibratedRed: 0.95, green: 0.96, blue: 0.89, alpha: 0.09),
]

for (index, panel) in panels.enumerated() {
  fillRoundedRect(panel, radius: 24, color: panelColors[index % panelColors.count])
  let inset = NSBezierPath(roundedRect: panel.insetBy(dx: 16, dy: 18), xRadius: 18, yRadius: 18)
  inset.lineWidth = 1.3
  NSColor(calibratedWhite: 1, alpha: 0.13).setStroke()
  inset.stroke()

  for offset in stride(from: panel.minY + 36, to: panel.maxY - 24, by: 54) {
    strokeLine(
      from: CGPoint(x: panel.minX + 18, y: offset),
      to: CGPoint(x: panel.maxX - 18, y: offset + CGFloat(index.isMultiple(of: 2) ? 12 : -10)),
      width: 1,
      color: NSColor(calibratedWhite: 1, alpha: 1),
      alpha: 0.09
    )
  }
}

let floorGlow = NSBezierPath()
floorGlow.move(to: CGPoint(x: 552, y: 0))
floorGlow.line(to: CGPoint(x: 1232, y: 0))
floorGlow.line(to: CGPoint(x: 1092, y: 382))
floorGlow.line(to: CGPoint(x: 706, y: 382))
floorGlow.close()
NSColor(calibratedRed: 0.94, green: 0.80, blue: 0.64, alpha: 0.24).setFill()
floorGlow.fill()

let mirrorStrip = NSBezierPath()
mirrorStrip.move(to: CGPoint(x: 714, y: 0))
mirrorStrip.line(to: CGPoint(x: 1064, y: 0))
mirrorStrip.line(to: CGPoint(x: 986, y: 382))
mirrorStrip.line(to: CGPoint(x: 794, y: 382))
mirrorStrip.close()
NSColor(calibratedRed: 0.98, green: 0.94, blue: 0.86, alpha: 0.16).setFill()
mirrorStrip.fill()

let figures: [CGRect] = [
  CGRect(x: 674, y: 94, width: 64, height: 210),
  CGRect(x: 862, y: 124, width: 68, height: 230),
  CGRect(x: 1080, y: 86, width: 58, height: 190),
]

for figure in figures {
  fillRoundedRect(
    figure,
    radius: 28,
    color: NSColor(calibratedRed: 0.07, green: 0.09, blue: 0.12, alpha: 0.84)
  )
  fillEllipse(
    CGRect(x: figure.minX + 10, y: figure.maxY - 4, width: figure.width - 20, height: 44),
    color: NSColor(calibratedRed: 0.07, green: 0.09, blue: 0.12, alpha: 0.84)
  )
}

fillEllipse(
  CGRect(x: 120, y: 790, width: 240, height: 90),
  color: NSColor(calibratedRed: 0.98, green: 0.86, blue: 0.68, alpha: 0.08)
)
fillEllipse(
  CGRect(x: 1240, y: 696, width: 280, height: 96),
  color: NSColor(calibratedRed: 0.64, green: 0.88, blue: 0.95, alpha: 0.08)
)

NSGraphicsContext.restoreGraphicsState()

guard let data = rep.representation(using: .png, properties: [:]) else {
  fatalError("Failed to create PNG data")
}

let outputURL = URL(fileURLWithPath: outputPath)
try FileManager.default.createDirectory(
  at: outputURL.deletingLastPathComponent(),
  withIntermediateDirectories: true
)
try data.write(to: outputURL)
