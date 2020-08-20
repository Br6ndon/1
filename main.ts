let mySprite = sprites.create(img`
    . . . . . . . . . . . . . c c f f f . . . . . . . . . . . . . . 
    . . . . . . . . . . . c c d d b c f . . . . . . . . . . . . . . 
    . . . . . . . . . . c c d d b b f . . . . . . . . . . . . . . . 
    . . . . . . . . . . f c c b b c f . . . . . . . . . . . . . . . 
    . . . . . f f f f f c c c c c c f f . . . . . . . . . c c c . . 
    . . . f f b b b b b b b c b b b b c f f f . . . . c c b b c . . 
    . . f b b b b b b b b c b c b b b b c c c f f . c d b b c . . . 
    f f b b b b b b f f b b c b c b b b c c c c c f c d b b f . . . 
    f b c b b b 1 1 f f 1 b c b b b b b c c c c c f f b b f . . . . 
    f b b b 1 1 1 1 1 1 1 1 b b b b b c c c c c c c b b c f . . . . 
    . f b 1 1 1 3 3 c c 1 1 b b b b c c c c c c c c c c c f . . . . 
    . . f c c c 3 1 c 1 1 1 b b b c c c c c b d b f f b b c f . . . 
    . . . f c 1 3 c 1 1 1 c b b b f c d d d d c c . . f b b f . . . 
    . . . . f c c c 1 1 1 f b d b b c c d c c . . . . . f b b f . . 
    . . . . . . . . c c c c f c d b b c c . . . . . . . . f f f . . 
    . . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 200)
scene.setBackgroundColor(6)
effects.bubbles.startScreenEffect(5000)
info.setScore(0)
info.changeScoreBy(5)
info.startCountdown(20)
info.setLife(2)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . . . c c f f f . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . c d d b b f . . . . . . . . . . . . . 
    . . . . . . . . f f f f f f f f f d d b b f . . . . . . . . . . . . . . 
    . . . . . . . f b b b b b b b b b f c b c f . . . . . . . . . . . . . . 
    . . . . . . . f b b c 1 1 1 b f f b b c c f f f f . . . . . . . . . . . 
    . . . . . . . f b 1 1 1 1 1 1 f f b b b b b c c c f f . . . . c c c c c 
    . . . . . . . . f 1 c c 3 3 1 1 b b c b c b b c c c c f . . c d b b b c 
    . . . . . . . . f c c 1 3 1 c 1 b b b c b c b c c c c c f c d d b b c . 
    . . . . . . . . . f 1 1 1 1 1 1 b b b c b c b c c c c c c b d b b f . . 
    . . . . . . . . . f 1 1 1 1 1 1 1 b b b b b c c c c c c c c b b c f . . 
    . . . . . . . . . . f 1 1 1 1 1 1 b b b b c c c c c c c f f b c c f . . 
    . . . . . . . . . . . c 1 1 1 1 c b b b c c c c c b d b c . f b b c f . 
    . . . . . . . . . . . . c c 1 1 c b b b f d d d d d d c . . . f b b f . 
    . . . . . . . . . . . . . . c f f b d b b f d d d c c . . . . . f b b f 
    . . . . . . . . . . . . . . . . . f b d b b f c c . . . . . . . . f f f 
    . . . . . . . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
mySprite2.setPosition(28, 46)
