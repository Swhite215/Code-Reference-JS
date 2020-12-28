// Numeric Enums
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

// String Enums
enum DirectionTwo {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
  }

  // Constant and Computed
enum FileAccess {
    // constant members
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    // computed member
    G = "123".length,
}