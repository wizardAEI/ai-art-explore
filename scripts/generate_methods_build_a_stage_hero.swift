import AppKit
import CoreGraphics
import Foundation

let outputPath =
  CommandLine.arguments.dropFirst().first
  ?? "public/assets/art-tech-hero-2026-05-29-methods-build-a-stage.png"
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

func fillRoundedRect(_ rect: CGRect, radius: CGFloat, color: NSColor) {
  color.setFill()
  NSBezierPath(roundedRect: rect, xRadius: radius, yRadius: radius).fill()
}

func fillEllipse(_ rect: CGRect, color: NSColor) {
  color.setFill()
  NSBezierPath(ovalIn: rect).fill()
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

func strokeRoundedRect(
  _ rect: CGRect,
  radius: CGFloat,
  width: CGFloat,
  color: NSColor,
  alpha: CGFloat
) {
  let path = NSBezierPath(roundedRect: rect, xRadius: radius, yRadius: radius)
  path.lineWidth = width
  color.withAlphaComponent(alpha).setStroke()
  path.stroke()
}

func fillPolygon(_ points: [CGPoint], color: NSColor) {
  guard let first = points.first else { return }
  let path = NSBezierPath()
  path.move(to: first)
  for point in points.dropFirst() {
    path.line(to: point)
  }
  path.close()
  color.setFill()
  path.fill()
}

NSColor(calibratedRed: 0.02, green: 0.03, blue: 0.05, alpha: 1).setFill()
canvasRect.fill()

fillGradient(
  [
    NSColor(calibratedRed: 0.03, green: 0.08, blue: 0.12, alpha: 1),
    NSColor(calibratedRed: 0.07, green: 0.16, blue: 0.23, alpha: 1),
    NSColor(calibratedRed: 0.16, green: 0.10, blue: 0.11, alpha: 1),
  ],
  start: CGPoint(x: 180, y: 1080),
  end: CGPoint(x: 1640, y: 20)
)

fillEllipse(
  CGRect(x: -140, y: 490, width: 760, height: 540),
  color: NSColor(calibratedRed: 0.23, green: 0.76, blue: 0.77, alpha: 0.24)
)
fillEllipse(
  CGRect(x: 1160, y: 320, width: 610, height: 430),
  color: NSColor(calibratedRed: 0.94, green: 0.49, blue: 0.42, alpha: 0.18)
)
fillEllipse(
  CGRect(x: 480, y: 620, width: 920, height: 300),
  color: NSColor(calibratedWhite: 1, alpha: 0.06)
)

for y in stride(from: 584, through: 1016, by: 30) {
  strokeLine(
    from: CGPoint(x: 0, y: CGFloat(y)),
    to: CGPoint(x: 1792, y: CGFloat(y)),
    width: 1,
    color: NSColor(calibratedWhite: 1, alpha: 1),
    alpha: 0.018
  )
}

fillPolygon(
  [
    CGPoint(x: 0, y: 0),
    CGPoint(x: 1792, y: 0),
    CGPoint(x: 1792, y: 260),
    CGPoint(x: 0, y: 310),
  ],
  color: NSColor(calibratedRed: 0.03, green: 0.05, blue: 0.08, alpha: 0.95)
)

fillPolygon(
  [
    CGPoint(x: 0, y: 310),
    CGPoint(x: 1792, y: 260),
    CGPoint(x: 1792, y: 388),
    CGPoint(x: 0, y: 430),
  ],
  color: NSColor(calibratedRed: 0.12, green: 0.09, blue: 0.10, alpha: 0.32)
)

let stagePanels: [CGRect] = [
  CGRect(x: 78, y: 212, width: 224, height: 618),
  CGRect(x: 368, y: 300, width: 188, height: 494),
  CGRect(x: 620, y: 338, width: 208, height: 438),
  CGRect(x: 900, y: 330, width: 172, height: 440),
  CGRect(x: 1180, y: 264, width: 240, height: 508),
  CGRect(x: 1500, y: 292, width: 184, height: 470),
]

let panelColors: [NSColor] = [
  NSColor(calibratedRed: 0.35, green: 0.92, blue: 0.93, alpha: 0.17),
  NSColor(calibratedRed: 0.73, green: 0.82, blue: 0.87, alpha: 0.11),
  NSColor(calibratedRed: 0.96, green: 0.67, blue: 0.44, alpha: 0.15),
  NSColor(calibratedRed: 0.34, green: 0.78, blue: 0.89, alpha: 0.16),
  NSColor(calibratedRed: 0.94, green: 0.52, blue: 0.47, alpha: 0.18),
  NSColor(calibratedRed: 0.82, green: 0.88, blue: 0.91, alpha: 0.13),
]

for (index, panel) in stagePanels.enumerated() {
  strokeLine(
    from: CGPoint(x: panel.midX, y: 1024),
    to: CGPoint(x: panel.midX, y: panel.maxY),
    width: 1.2,
    color: NSColor(calibratedWhite: 1, alpha: 1),
    alpha: 0.12
  )
  fillRoundedRect(panel, radius: 12, color: panelColors[index])
  strokeRoundedRect(
    panel.insetBy(dx: 14, dy: 14),
    radius: 8,
    width: 1,
    color: NSColor(calibratedWhite: 1, alpha: 1),
    alpha: 0.08
  )
}

let critiqueTable = CGRect(x: 458, y: 154, width: 708, height: 102)
fillRoundedRect(
  critiqueTable,
  radius: 22,
  color: NSColor(calibratedRed: 0.74, green: 0.76, blue: 0.78, alpha: 0.16)
)
fillRoundedRect(
  critiqueTable.insetBy(dx: 24, dy: 20),
  radius: 16,
  color: NSColor(calibratedRed: 0.10, green: 0.12, blue: 0.15, alpha: 0.96)
)
strokeRoundedRect(
  critiqueTable.insetBy(dx: 24, dy: 20),
  radius: 16,
  width: 1.2,
  color: NSColor(calibratedWhite: 1, alpha: 1),
  alpha: 0.1
)

let tabletopRects: [CGRect] = [
  CGRect(x: 548, y: 180, width: 104, height: 18),
  CGRect(x: 712, y: 196, width: 132, height: 16),
  CGRect(x: 900, y: 174, width: 118, height: 18),
]

for rect in tabletopRects {
  fillRoundedRect(
    rect,
    radius: 7,
    color: NSColor(calibratedRed: 0.91, green: 0.63, blue: 0.49, alpha: 0.62)
  )
}

let lightRig = CGRect(x: 1180, y: 744, width: 382, height: 28)
fillRoundedRect(
  lightRig,
  radius: 10,
  color: NSColor(calibratedRed: 0.94, green: 0.61, blue: 0.44, alpha: 0.72)
)
fillRoundedRect(
  lightRig.insetBy(dx: 18, dy: 6),
  radius: 6,
  color: NSColor(calibratedRed: 0.06, green: 0.09, blue: 0.12, alpha: 1)
)
strokeLine(
  from: CGPoint(x: 1224, y: 1024),
  to: CGPoint(x: 1224, y: 772),
  width: 1.4,
  color: NSColor(calibratedWhite: 1, alpha: 1),
  alpha: 0.12
)
strokeLine(
  from: CGPoint(x: 1520, y: 1024),
  to: CGPoint(x: 1520, y: 772),
  width: 1.4,
  color: NSColor(calibratedWhite: 1, alpha: 1),
  alpha: 0.12
)

let silhouetteRects: [CGRect] = [
  CGRect(x: 276, y: 66, width: 74, height: 188),
  CGRect(x: 1188, y: 78, width: 66, height: 206),
  CGRect(x: 1304, y: 72, width: 78, height: 220),
]

for rect in silhouetteRects {
  fillRoundedRect(
    rect,
    radius: 32,
    color: NSColor(calibratedRed: 0.05, green: 0.07, blue: 0.09, alpha: 0.88)
  )
  fillEllipse(
    CGRect(x: rect.minX + 9, y: rect.maxY - 34, width: rect.width - 18, height: 58),
    color: NSColor(calibratedRed: 0.07, green: 0.09, blue: 0.12, alpha: 0.92)
  )
}

fillPolygon(
  [
    CGPoint(x: 0, y: 0),
    CGPoint(x: 440, y: 0),
    CGPoint(x: 440, y: 150),
    CGPoint(x: 0, y: 186),
  ],
  color: NSColor(calibratedRed: 0.03, green: 0.04, blue: 0.06, alpha: 0.58)
)

NSGraphicsContext.restoreGraphicsState()

let image = NSImage(size: NSSize(width: width, height: height))
image.addRepresentation(rep)

let outputURL = URL(fileURLWithPath: outputPath)
try FileManager.default.createDirectory(
  at: outputURL.deletingLastPathComponent(),
  withIntermediateDirectories: true
)

guard
  let data = rep.representation(using: .png, properties: [:])
else {
  fatalError("Failed to encode PNG data.")
}

try data.write(to: outputURL)
print("Wrote hero image to \(outputURL.path)")
