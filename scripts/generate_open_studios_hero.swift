import AppKit
import CoreGraphics
import Foundation

let outputPath = CommandLine.arguments.dropFirst().first ?? "public/assets/art-tech-hero-2026-05-14-open-studios.png"
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

NSColor(calibratedRed: 0.03, green: 0.05, blue: 0.06, alpha: 1).setFill()
canvasRect.fill()

fillGradient(
  [
    NSColor(calibratedRed: 0.02, green: 0.04, blue: 0.06, alpha: 1),
    NSColor(calibratedRed: 0.06, green: 0.11, blue: 0.15, alpha: 1),
    NSColor(calibratedRed: 0.18, green: 0.10, blue: 0.08, alpha: 1),
  ],
  start: CGPoint(x: 180, y: 980),
  end: CGPoint(x: 1580, y: 60)
)

fillEllipse(
  CGRect(x: -160, y: 540, width: 620, height: 430),
  color: NSColor(calibratedRed: 0.97, green: 0.73, blue: 0.47, alpha: 0.15)
)
fillEllipse(
  CGRect(x: 1040, y: 90, width: 660, height: 460),
  color: NSColor(calibratedRed: 0.39, green: 0.76, blue: 0.83, alpha: 0.12)
)
fillEllipse(
  CGRect(x: 690, y: 300, width: 420, height: 330),
  color: NSColor(calibratedRed: 0.99, green: 0.90, blue: 0.75, alpha: 0.06)
)

for x in stride(from: 120, through: 1670, by: 146) {
  strokeLine(
    from: CGPoint(x: CGFloat(x), y: 80),
    to: CGPoint(x: CGFloat(x) + 96, y: 980),
    width: 1.1,
    color: NSColor(calibratedRed: 0.88, green: 0.94, blue: 0.95, alpha: 1),
    alpha: 0.06
  )
}

for y in stride(from: 128, through: 900, by: 112) {
  strokeLine(
    from: CGPoint(x: 40, y: CGFloat(y)),
    to: CGPoint(x: 1750, y: CGFloat(y) + 22),
    width: 1,
    color: NSColor(calibratedRed: 0.95, green: 0.88, blue: 0.79, alpha: 1),
    alpha: 0.045
  )
}

let screens: [CGRect] = [
  CGRect(x: 116, y: 226, width: 250, height: 512),
  CGRect(x: 422, y: 182, width: 208, height: 608),
  CGRect(x: 706, y: 252, width: 228, height: 472),
  CGRect(x: 1016, y: 152, width: 214, height: 654),
  CGRect(x: 1296, y: 244, width: 278, height: 446),
]

let screenColors: [NSColor] = [
  NSColor(calibratedRed: 0.93, green: 0.77, blue: 0.56, alpha: 0.15),
  NSColor(calibratedRed: 0.56, green: 0.84, blue: 0.85, alpha: 0.14),
  NSColor(calibratedRed: 0.98, green: 0.95, blue: 0.90, alpha: 0.10),
]

for (index, screen) in screens.enumerated() {
  fillRoundedRect(screen, radius: 18, color: screenColors[index % screenColors.count])
  let innerFrame = screen.insetBy(dx: 14, dy: 18)
  let framePath = NSBezierPath(roundedRect: innerFrame, xRadius: 12, yRadius: 12)
  framePath.lineWidth = 1.4
  NSColor(calibratedWhite: 1, alpha: 0.12).setStroke()
  framePath.stroke()

  for offset in stride(from: innerFrame.minY + 28, to: innerFrame.maxY - 24, by: 56) {
    strokeLine(
      from: CGPoint(x: innerFrame.minX + 10, y: offset),
      to: CGPoint(x: innerFrame.maxX - 10, y: offset + CGFloat.random(in: -8...10)),
      width: 1,
      color: NSColor(calibratedWhite: 1, alpha: 1),
      alpha: CGFloat.random(in: 0.05...0.12)
    )
  }
}

let pathway = NSBezierPath()
pathway.move(to: CGPoint(x: 168, y: 0))
pathway.line(to: CGPoint(x: 514, y: 0))
pathway.line(to: CGPoint(x: 1100, y: 1024))
pathway.line(to: CGPoint(x: 792, y: 1024))
pathway.close()
NSColor(calibratedRed: 0.82, green: 0.62, blue: 0.40, alpha: 0.16).setFill()
pathway.fill()

let pathwayGlow = NSBezierPath()
pathwayGlow.move(to: CGPoint(x: 258, y: 0))
pathwayGlow.line(to: CGPoint(x: 402, y: 0))
pathwayGlow.line(to: CGPoint(x: 928, y: 1024))
pathwayGlow.line(to: CGPoint(x: 824, y: 1024))
pathwayGlow.close()
NSColor(calibratedRed: 1.0, green: 0.84, blue: 0.62, alpha: 0.12).setFill()
pathwayGlow.fill()

let figures: [CGRect] = [
  CGRect(x: 278, y: 86, width: 54, height: 214),
  CGRect(x: 546, y: 102, width: 62, height: 248),
  CGRect(x: 844, y: 92, width: 56, height: 226),
  CGRect(x: 1164, y: 98, width: 60, height: 240),
  CGRect(x: 1462, y: 88, width: 52, height: 210),
]

for figure in figures {
  fillRoundedRect(
    figure,
    radius: 26,
    color: NSColor(calibratedRed: 0.08, green: 0.09, blue: 0.11, alpha: 0.84)
  )
  fillEllipse(
    CGRect(x: figure.minX + 9, y: figure.maxY - 4, width: figure.width - 18, height: 50),
    color: NSColor(calibratedRed: 0.08, green: 0.09, blue: 0.11, alpha: 0.84)
  )
}

for _ in 0..<2200 {
  let x = CGFloat.random(in: 0..<CGFloat(width))
  let y = CGFloat.random(in: 0..<CGFloat(height))
  let size = CGFloat.random(in: 0.4...1.9)
  let alpha = CGFloat.random(in: 0.02...0.08)
  fillEllipse(
    CGRect(x: x, y: y, width: size, height: size),
    color: NSColor(calibratedWhite: 1, alpha: alpha)
  )
}

fillGradient(
  [
    NSColor(calibratedRed: 0.02, green: 0.03, blue: 0.04, alpha: 0.0),
    NSColor(calibratedRed: 0.02, green: 0.03, blue: 0.04, alpha: 0.62),
  ],
  start: CGPoint(x: 0, y: 380),
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
