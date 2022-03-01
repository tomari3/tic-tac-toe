# Tic Tac Toe

    # Problem
    The goal here is to make a playable tic-tac-toe game with a game board, two types of input, two players (one may be a pc).
    The code should be either tucked in modules or created by factories with minimum use of global variables.

    # Plan
    -- plan directions are being taken from The Odin Project as well as the project it self and all of the logic that got me to this point. https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/tic-tac-toe --

    1. Make a game board object
        init an array of 3 by 3 of
        store sign at each position at array - X, O or empty - start empty
    2. Make Players object
        get a player name - 1, 2, custom, or AI
        if AI set player 2 to AI
        Get player chosen input X or O - set default to X
    3. input
        let user decide where to place the input

        1   2   3
        4   5   6
        7   8   9

    if same sign at 147, 258, 369
                or  123, 456, 789
                or  159, 357

    Game over, relevant sign win.

    Game
