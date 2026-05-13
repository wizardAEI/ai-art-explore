import AppKit
import CoreGraphics
import Foundation

let outputPath = CommandLine.arguments.dropFirst().first ?? "public/assets/art-tech-hero-2026-05-13-feedback-loops.png"
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

func strokeLine(from: CGPoint, to: CGPoint, width: CGFloat, color: NSColor, alpha: CGFloat = 1) {
  let path = NSBezierPath()
  path.move(to: from)
  path.line(to: to)
  path.lineWidth = width
  path.lineCapStyle = .round
  color.withAlphaComponent(alpha).setStroke()
  path.stroke()
}

NSColor(calibratedRed: 0.06, green: 0.08, blue: 0.10, alpha: 1).setFill()
canvasRect.fill()

fillGradient(
  [
    NSColor(calibratedRed: 0.03, green: 0.05, blue: 0.07, alpha: 1),
    NSColor(calibratedRed: 0.10, green: 0.16, blue: 0.19, alpha: 1),
    NSColor(calibratedRed: 0.18, green: 0.11, blue: 0.09, alpha: 1),
  ],
  start: CGPoint(x: 160, y: 940),
  end: CGPoint(x: 1500, y: 80)
)

fillEllipse(CGRect(x: -120, y: 580, width: 580, height: 420), color: NSColor(calibratedRed: 0.89, green: 0.64, blue: 0.38, alpha: 0.18))
fillEllipse(CGRect(x: 1180, y: 160, width: 520, height: 420), color: NSColor(calibratedRed: 0.38, green: 0.67, blue: 0.73, alpha: 0.16))
fillEllipse(CGRect(x: 760, y: 360, width: 340, height: 340), color: NSColor(calibratedRed: 0.95, green: 0.82, blue: 0.62, alpha: 0.08))

let panelColors: [NSColor] = [
  NSColor(calibratedRed: 0.92, green: 0.74, blue: 0.53, alpha: 0.16),
  NSColor(calibratedRed: 0.53, green: 0.80, blue: 0.82, alpha: 0.14),
  NSColor(calibratedRed: 0.96, green: 0.92, blue: 0.84, alpha: 0.10),
]

let panels: [CGRect] = [
  CGRect(x: 160, y: 210, width: 250, height: 560),
  CGRect(x: 468, y: 130, width: 160, height: 700),
  CGRect(x: 704, y: 260, width: 220, height: 500),
  CGRect(x: 1018, y: 120, width: 180, height: 680),
  CGRect(x: 1268, y: 250, width: 280, height: 460),
]

for (index, panel) in panels.enumerated() {
  fillRoundedRect(panel, radius: 16, color: panelColors[index % panelColors.count])
  strokeLine(
    from: CGPoint(x: panel.minX, y: panel.minY + 14),
    to: CGPoint(x: panel.maxX, y: panel.minY + 14),
    width: 1.2,
    color: .white,
    alpha: 0.14
  )
}

for x in stride(from: 120, through: 1660, by: 140) {
  strokeLine(
    from: CGPoint(x: CGFloat(x), y: 0),
    to: CGPoint(x: CGFloat(x) + 120, y: 1024),
    width: 1,
    color: NSColor(calibratedRed: 0.80, green: 0.87, blue: 0.88, alpha: 1),
    alpha: 0.07
  )
}

for y in stride(from: 96, through: 920, by: 116) {
  strokeLine(
    from: CGPoint(x: 0, y: CGFloat(y)),
    to: CGPoint(x: 1792, y: CGFloat(y) + 48),
    width: 1,
    color: NSColor(calibratedRed: 0.95, green: 0.86, blue: 0.75, alpha: 1),
    alpha: 0.045
  )
}

let loopCenters = [
  CGPoint(x: 418, y: 540),
  CGPoint(x: 890, y: 480),
  CGPoint(x: 1330, y: 520),
]

for center in loopCenters {
  let ringRect = CGRect(x: center.x - 118, y: center.y - 118, width: 236, height: 236)
  let path = NSBezierPath(ovalIn: ringRect)
  path.lineWidth = 2.4
  NSColor(calibratedRed: 0.95, green: 0.84, blue: 0.65, alpha: 0.22).setStroke()
  path.stroke()

  let innerRect = ringRect.insetBy(dx: 38, dy: 38)
  let innerPath = NSBezierPath(ovalIn: innerRect)
  innerPath.lineWidth = 1.4
  NSColor(calibratedRed: 0.52, green: 0.78, blue: 0.82, alpha: 0.18).setStroke()
  innerPath.stroke()
}

let figureColors = [
  NSColor(calibratedRed: 0.10, green: 0.10, blue: 0.12, alpha: 0.88),
  NSColor(calibratedRed: 0.15, green: 0.16, blue: 0.18, alpha: 0.86),
]

let figures: [CGRect] = [
  CGRect(x: 308, y: 88, width: 58, height: 228),
  CGRect(x: 530, y: 102, width: 64, height: 246),
  CGRect(x: 812, y: 92, width: 56, height: 220),
  CGRect(x: 1168, y: 108, width: 60, height: 250),
  CGRect(x: 1432, y: 86, width: 54, height: 218),
]

for (index, figure) in figures.enumerated() {
  fillRoundedRect(figure, radius: 28, color: figureColors[index % figureColors.count])
  fillEllipse(
    CGRect(x: figure.minX + 10, y: figure.maxY - 6, width: figure.width - 20, height: 54),
    color: figureColors[index % figureColors.count]
  )
}

for _ in 0..<1800 {
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
    NSColor(calibratedRed: 0.02, green: 0.03, blue: 0.04, alpha: 0.54),
  ],
  start: CGPoint(x: 0, y: 420),
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
