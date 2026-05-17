import AppKit
import CoreGraphics
import Foundation

let outputPath =
  CommandLine.arguments.dropFirst().first
  ?? "public/assets/art-tech-hero-2026-05-17-workflows-take-the-stage.png"
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

NSColor(calibratedRed: 0.04, green: 0.05, blue: 0.07, alpha: 1).setFill()
canvasRect.fill()

fillGradient(
  [
    NSColor(calibratedRed: 0.06, green: 0.08, blue: 0.12, alpha: 1),
    NSColor(calibratedRed: 0.12, green: 0.18, blue: 0.24, alpha: 1),
    NSColor(calibratedRed: 0.38, green: 0.18, blue: 0.12, alpha: 1),
  ],
  start: CGPoint(x: 90, y: 980),
  end: CGPoint(x: 1670, y: 80)
)

fillEllipse(
  CGRect(x: -80, y: 520, width: 700, height: 420),
  color: NSColor(calibratedRed: 0.99, green: 0.78, blue: 0.54, alpha: 0.16)
)
fillEllipse(
  CGRect(x: 1110, y: 120, width: 540, height: 340),
  color: NSColor(calibratedRed: 0.50, green: 0.83, blue: 0.88, alpha: 0.16)
)
fillEllipse(
  CGRect(x: 720, y: 470, width: 320, height: 220),
  color: NSColor(calibratedRed: 0.95, green: 0.95, blue: 0.90, alpha: 0.06)
)

for x in stride(from: 80, through: 1700, by: 118) {
  strokeLine(
    from: CGPoint(x: CGFloat(x), y: 80),
    to: CGPoint(x: CGFloat(x) + 48, y: 980),
    width: 1,
    color: NSColor(calibratedWhite: 1, alpha: 1),
    alpha: 0.05
  )
}

let stageBands: [CGRect] = [
  CGRect(x: 118, y: 650, width: 1500, height: 92),
  CGRect(x: 150, y: 510, width: 1380, height: 84),
  CGRect(x: 220, y: 382, width: 1220, height: 74),
]

for (index, band) in stageBands.enumerated() {
  fillRoundedRect(
    band,
    radius: 30,
    color: index == 0
      ? NSColor(calibratedRed: 0.10, green: 0.13, blue: 0.18, alpha: 0.66)
      : NSColor(calibratedRed: 0.14, green: 0.18, blue: 0.23, alpha: 0.50)
  )
  let border = NSBezierPath(roundedRect: band.insetBy(dx: 10, dy: 10), xRadius: 22, yRadius: 22)
  border.lineWidth = 1.2
  NSColor(calibratedWhite: 1, alpha: 0.12).setStroke()
  border.stroke()
}

let verticalPanels: [CGRect] = [
  CGRect(x: 190, y: 224, width: 180, height: 468),
  CGRect(x: 462, y: 256, width: 144, height: 392),
  CGRect(x: 694, y: 186, width: 208, height: 472),
  CGRect(x: 970, y: 224, width: 176, height: 424),
  CGRect(x: 1228, y: 196, width: 224, height: 446),
]

let panelColors: [NSColor] = [
  NSColor(calibratedRed: 0.98, green: 0.86, blue: 0.72, alpha: 0.16),
  NSColor(calibratedRed: 0.68, green: 0.87, blue: 0.90, alpha: 0.14),
  NSColor(calibratedRed: 0.98, green: 0.95, blue: 0.88, alpha: 0.10),
]

for (index, panel) in verticalPanels.enumerated() {
  fillRoundedRect(panel, radius: 24, color: panelColors[index % panelColors.count])
  let outline = NSBezierPath(roundedRect: panel.insetBy(dx: 14, dy: 16), xRadius: 18, yRadius: 18)
  outline.lineWidth = 1.4
  NSColor(calibratedWhite: 1, alpha: 0.13).setStroke()
  outline.stroke()

  for offset in stride(from: panel.minY + 38, to: panel.maxY - 30, by: 58) {
    strokeLine(
      from: CGPoint(x: panel.minX + 18, y: offset),
      to: CGPoint(x: panel.maxX - 18, y: offset + CGFloat.random(in: -14...14)),
      width: 1,
      color: .white,
      alpha: CGFloat.random(in: 0.05...0.12)
    )
  }
}

let curtains: [CGRect] = [
  CGRect(x: 356, y: 280, width: 210, height: 330),
  CGRect(x: 1090, y: 258, width: 260, height: 360),
]

for curtain in curtains {
  let path = NSBezierPath()
  path.move(to: CGPoint(x: curtain.minX + 24, y: curtain.maxY))
  path.curve(
    to: CGPoint(x: curtain.minX, y: curtain.minY + 70),
    controlPoint1: CGPoint(x: curtain.minX + 6, y: curtain.maxY - 96),
    controlPoint2: CGPoint(x: curtain.minX - 12, y: curtain.minY + 176)
  )
  path.curve(
    to: CGPoint(x: curtain.maxX, y: curtain.minY + 48),
    controlPoint1: CGPoint(x: curtain.minX + 98, y: curtain.minY + 10),
    controlPoint2: CGPoint(x: curtain.maxX - 94, y: curtain.minY + 6)
  )
  path.curve(
    to: CGPoint(x: curtain.maxX - 24, y: curtain.maxY),
    controlPoint1: CGPoint(x: curtain.maxX + 18, y: curtain.minY + 172),
    controlPoint2: CGPoint(x: curtain.maxX - 8, y: curtain.maxY - 92)
  )
  path.close()
  NSColor(calibratedRed: 0.94, green: 0.78, blue: 0.61, alpha: 0.18).setFill()
  path.fill()
}

for y in stride(from: 250, through: 860, by: 96) {
  strokeLine(
    from: CGPoint(x: 120, y: CGFloat(y)),
    to: CGPoint(x: 1620, y: CGFloat(y) + 14),
    width: 1,
    color: NSColor(calibratedRed: 0.99, green: 0.88, blue: 0.78, alpha: 1),
    alpha: 0.045
  )
}

let walkway = NSBezierPath()
walkway.move(to: CGPoint(x: 642, y: 0))
walkway.line(to: CGPoint(x: 1150, y: 0))
walkway.line(to: CGPoint(x: 1012, y: 390))
walkway.line(to: CGPoint(x: 760, y: 390))
walkway.close()
NSColor(calibratedRed: 0.94, green: 0.80, blue: 0.66, alpha: 0.22).setFill()
walkway.fill()

let walkwayCore = NSBezierPath()
walkwayCore.move(to: CGPoint(x: 740, y: 0))
walkwayCore.line(to: CGPoint(x: 1040, y: 0))
walkwayCore.line(to: CGPoint(x: 956, y: 390))
walkwayCore.line(to: CGPoint(x: 808, y: 390))
walkwayCore.close()
NSColor(calibratedRed: 1, green: 0.93, blue: 0.84, alpha: 0.18).setFill()
walkwayCore.fill()

let figures: [CGRect] = [
  CGRect(x: 684, y: 86, width: 66, height: 218),
  CGRect(x: 878, y: 106, width: 70, height: 240),
  CGRect(x: 1090, y: 76, width: 58, height: 196),
]

for figure in figures {
  fillRoundedRect(
    figure,
    radius: 28,
    color: NSColor(calibratedRed: 0.07, green: 0.09, blue: 0.11, alpha: 0.82)
  )
  fillEllipse(
    CGRect(x: figure.minX + 10, y: figure.maxY - 4, width: figure.width - 20, height: 46),
    color: NSColor(calibratedRed: 0.07, green: 0.09, blue: 0.11, alpha: 0.82)
  )
}

for _ in 0..<2100 {
  let x = CGFloat.random(in: 0..<CGFloat(width))
  let y = CGFloat.random(in: 0..<CGFloat(height))
  let size = CGFloat.random(in: 0.4...1.8)
  let alpha = CGFloat.random(in: 0.02...0.08)
  fillEllipse(
    CGRect(x: x, y: y, width: size, height: size),
    color: NSColor(calibratedWhite: 1, alpha: alpha)
  )
}

fillGradient(
  [
    NSColor(calibratedRed: 0.02, green: 0.03, blue: 0.04, alpha: 0.0),
    NSColor(calibratedRed: 0.02, green: 0.03, blue: 0.04, alpha: 0.66),
  ],
  start: CGPoint(x: 0, y: 320),
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
