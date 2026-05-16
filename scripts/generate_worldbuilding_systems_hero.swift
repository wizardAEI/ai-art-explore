import AppKit
import CoreGraphics
import Foundation

let outputPath =
  CommandLine.arguments.dropFirst().first
  ?? "public/assets/art-tech-hero-2026-05-16-worldbuilding-systems.png"
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

NSColor(calibratedRed: 0.03, green: 0.05, blue: 0.07, alpha: 1).setFill()
canvasRect.fill()

fillGradient(
  [
    NSColor(calibratedRed: 0.02, green: 0.04, blue: 0.07, alpha: 1),
    NSColor(calibratedRed: 0.08, green: 0.14, blue: 0.18, alpha: 1),
    NSColor(calibratedRed: 0.16, green: 0.10, blue: 0.11, alpha: 1),
  ],
  start: CGPoint(x: 160, y: 980),
  end: CGPoint(x: 1600, y: 40)
)

fillEllipse(
  CGRect(x: -140, y: 560, width: 620, height: 430),
  color: NSColor(calibratedRed: 0.94, green: 0.72, blue: 0.47, alpha: 0.16)
)
fillEllipse(
  CGRect(x: 1120, y: 160, width: 560, height: 380),
  color: NSColor(calibratedRed: 0.40, green: 0.74, blue: 0.82, alpha: 0.14)
)
fillEllipse(
  CGRect(x: 720, y: 330, width: 360, height: 320),
  color: NSColor(calibratedRed: 0.98, green: 0.92, blue: 0.84, alpha: 0.07)
)

for x in stride(from: 90, through: 1680, by: 138) {
  strokeLine(
    from: CGPoint(x: CGFloat(x), y: 40),
    to: CGPoint(x: CGFloat(x) + 128, y: 1000),
    width: 1,
    color: NSColor(calibratedRed: 0.86, green: 0.93, blue: 0.95, alpha: 1),
    alpha: 0.06
  )
}

for y in stride(from: 120, through: 910, by: 110) {
  strokeLine(
    from: CGPoint(x: 40, y: CGFloat(y)),
    to: CGPoint(x: 1760, y: CGFloat(y) + 30),
    width: 1,
    color: NSColor(calibratedRed: 0.97, green: 0.88, blue: 0.78, alpha: 1),
    alpha: 0.045
  )
}

let modules: [CGRect] = [
  CGRect(x: 132, y: 240, width: 250, height: 520),
  CGRect(x: 436, y: 186, width: 172, height: 602),
  CGRect(x: 690, y: 262, width: 228, height: 444),
  CGRect(x: 996, y: 160, width: 192, height: 640),
  CGRect(x: 1262, y: 232, width: 292, height: 470),
]

let moduleColors: [NSColor] = [
  NSColor(calibratedRed: 0.94, green: 0.78, blue: 0.58, alpha: 0.15),
  NSColor(calibratedRed: 0.54, green: 0.82, blue: 0.85, alpha: 0.14),
  NSColor(calibratedRed: 0.98, green: 0.95, blue: 0.88, alpha: 0.10),
]

for (index, module) in modules.enumerated() {
  fillRoundedRect(module, radius: 18, color: moduleColors[index % moduleColors.count])
  let border = NSBezierPath(roundedRect: module.insetBy(dx: 12, dy: 14), xRadius: 12, yRadius: 12)
  border.lineWidth = 1.3
  NSColor(calibratedWhite: 1, alpha: 0.12).setStroke()
  border.stroke()

  for offset in stride(from: module.minY + 26, to: module.maxY - 22, by: 54) {
    strokeLine(
      from: CGPoint(x: module.minX + 14, y: offset),
      to: CGPoint(x: module.maxX - 14, y: offset + CGFloat.random(in: -10...10)),
      width: 1,
      color: .white,
      alpha: CGFloat.random(in: 0.05...0.12)
    )
  }
}

let archFrames: [CGRect] = [
  CGRect(x: 294, y: 286, width: 244, height: 362),
  CGRect(x: 812, y: 238, width: 250, height: 396),
  CGRect(x: 1310, y: 276, width: 232, height: 334),
]

for arch in archFrames {
  let outer = NSBezierPath(roundedRect: arch, xRadius: 116, yRadius: 116)
  outer.lineWidth = 2.2
  NSColor(calibratedRed: 0.96, green: 0.83, blue: 0.67, alpha: 0.20).setStroke()
  outer.stroke()

  let inner = NSBezierPath(roundedRect: arch.insetBy(dx: 34, dy: 42), xRadius: 80, yRadius: 80)
  inner.lineWidth = 1.4
  NSColor(calibratedRed: 0.50, green: 0.78, blue: 0.84, alpha: 0.18).setStroke()
  inner.stroke()
}

let runway = NSBezierPath()
runway.move(to: CGPoint(x: 210, y: 0))
runway.line(to: CGPoint(x: 486, y: 0))
runway.line(to: CGPoint(x: 1130, y: 1024))
runway.line(to: CGPoint(x: 868, y: 1024))
runway.close()
NSColor(calibratedRed: 0.82, green: 0.62, blue: 0.41, alpha: 0.16).setFill()
runway.fill()

let runwayCore = NSBezierPath()
runwayCore.move(to: CGPoint(x: 294, y: 0))
runwayCore.line(to: CGPoint(x: 398, y: 0))
runwayCore.line(to: CGPoint(x: 972, y: 1024))
runwayCore.line(to: CGPoint(x: 884, y: 1024))
runwayCore.close()
NSColor(calibratedRed: 1, green: 0.84, blue: 0.66, alpha: 0.12).setFill()
runwayCore.fill()

let figures: [CGRect] = [
  CGRect(x: 256, y: 88, width: 54, height: 210),
  CGRect(x: 540, y: 108, width: 60, height: 238),
  CGRect(x: 830, y: 94, width: 56, height: 222),
  CGRect(x: 1146, y: 102, width: 58, height: 234),
  CGRect(x: 1450, y: 90, width: 52, height: 212),
]

for figure in figures {
  fillRoundedRect(
    figure,
    radius: 24,
    color: NSColor(calibratedRed: 0.08, green: 0.10, blue: 0.12, alpha: 0.86)
  )
  fillEllipse(
    CGRect(x: figure.minX + 9, y: figure.maxY - 6, width: figure.width - 18, height: 48),
    color: NSColor(calibratedRed: 0.08, green: 0.10, blue: 0.12, alpha: 0.86)
  )
}

for _ in 0..<2200 {
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
    NSColor(calibratedRed: 0.02, green: 0.03, blue: 0.04, alpha: 0.62),
  ],
  start: CGPoint(x: 0, y: 360),
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
