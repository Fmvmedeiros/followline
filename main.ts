DFRobotMaqueenPlus.I2CInit()
basic.showLeds(`
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    `)
basic.forever(function () {
    if (DFRobotMaqueenPlus.readPatrol(Patrol.L2) == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 50)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 130)
    } else if (DFRobotMaqueenPlus.readPatrol(Patrol.R2) == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 130)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 50)
    } else if ((DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1 || DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1) && (DFRobotMaqueenPlus.readPatrol(Patrol.R3) == 0 || DFRobotMaqueenPlus.readPatrol(Patrol.L3) == 0)) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
    } else if (DFRobotMaqueenPlus.readPatrol(Patrol.R3) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.L3) == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 25)
    } else {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
})
