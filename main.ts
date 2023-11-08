namespace SpriteKind {
    export const My_Pokemon = SpriteKind.create()
    export const Blue_Pokemon = SpriteKind.create()
    export const Background_things = SpriteKind.create()
    export const options2 = SpriteKind.create()
    export const selecters = SpriteKind.create()
    export const Rival = SpriteKind.create()
    export const RedbarraGold = SpriteKind.create()
    export const HP = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.My_Pokemon, SpriteKind.Rival, function (sprite, otherSprite) {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Variavel_que_eu_selecionei == 0 && Option == 0) {
        Option = 1
        pause(1000)
    } else {
        if (Variavel_que_eu_selecionei == 0 && Option == 1) {
            Option = -1
            pause(100)
            game.showLongText("CHARMANDER used TACKLE", DialogLayout.Bottom)
            HpSquirt = HpSquirt - 2
            Variavel_que_eu_selecionei = 0
            sattack = randint(0, 4)
            if (sattack == 0 || sattack == 2) {
                game.showLongText("SQUIRTLE used TACKLE", DialogLayout.Bottom)
                Option = 0
                HpCharm = HpCharm - 2
                pause(200)
            } else {
                if (sattack == 1 || sattack == 3) {
                    game.showLongText("SQUIRTLE used TAIL WHIP", DialogLayout.Bottom)
                    Option = 0
                    pause(200)
                } else {
                    if (sattack == 4) {
                        game.showLongText("SQUIRTLE missed the attack", DialogLayout.Bottom)
                        Option = 0
                        pause(200)
                    }
                }
            }
        }
        if (Variavel_que_eu_selecionei == 1 && Option == 1) {
            Option = -1
            pause(100)
            game.showLongText("CHARMANDER used GROWL", DialogLayout.Bottom)
            Variavel_que_eu_selecionei = 0
            sattack = randint(0, 4)
            if (sattack == 0 || sattack == 2) {
                game.showLongText("SQUIRTLE used TACKLE", DialogLayout.Bottom)
                Option = 0
                HpCharm = HpCharm - 2
                pause(200)
            } else {
                if (sattack == 1 || sattack == 3) {
                    game.showLongText("SQUIRTLE used TAIL WHIP", DialogLayout.Bottom)
                    Option = 0
                    pause(200)
                } else {
                    if (sattack == 4) {
                        game.showLongText("SQUIRTLE missed the attack", DialogLayout.Bottom)
                        Option = 0
                        pause(200)
                    }
                }
            }
        }
    }
})
let sattack = 0
let HpSquirt = 0
let HpCharm = 0
let Option = 0
let Variavel_que_eu_selecionei = 0
game.setDialogTextColor(15)
game.setDialogFrame(assets.image`myImage2`)
game.setDialogCursor(assets.image`Nothing`)
Variavel_que_eu_selecionei = 7
Option = 0
let Lose = 0
let Win = 0
scene.setBackgroundColor(1)
music.play(music.createSong(assets.song`Battle theme`), music.PlaybackMode.LoopingInBackground)
let Text_Box = sprites.create(assets.image`myImage2`, SpriteKind.Background_things)
Text_Box.setScale(1.25, ScaleAnchor.Middle)
Text_Box.setPosition(80, 100)
let Blue = sprites.create(assets.image`blue rival`, SpriteKind.Rival)
Blue.setScale(1, ScaleAnchor.Middle)
Blue.setPosition(0, 39)
while (Blue.x != 130) {
    pause(5)
    Blue.x += 2
}
let RedGold = sprites.create(assets.image`myImage10`, SpriteKind.RedbarraGold)
RedGold.setScale(2, ScaleAnchor.Middle)
RedGold.setPosition(160, 55)
while (RedGold.x != 36) {
    pause(5)
    RedGold.x += -2
}
pause(1000)
game.showLongText("BLUE wants to fight!", DialogLayout.Bottom)
pause(1000)
while (Blue.x != 160) {
    pause(5)
    Blue.x += 2
}
sprites.destroy(Blue)
pause(100)
game.showLongText("BLUE sent out SQUIRTLE", DialogLayout.Bottom)
let Squirtle = sprites.create(assets.image`myImage1`, SpriteKind.Blue_Pokemon)
Squirtle.setScale(0.1, ScaleAnchor.Middle)
Squirtle.setPosition(130, 39)
for (let index = 0; index < 9; index++) {
    Squirtle.changeScale(0.1, ScaleAnchor.Middle)
    pause(5)
}
Squirtle.setScale(1, ScaleAnchor.Middle)
let SHp = sprites.create(assets.image`Full Hp`, SpriteKind.HP)
SHp.setPosition(30, 15)
pause(1000)
while (RedGold.x != 0) {
    pause(5)
    RedGold.x += -2
}
sprites.destroy(RedGold)
game.showLongText("RED sent out CHARMANDER", DialogLayout.Bottom)
let Charmander = sprites.create(assets.image`myImage0`, SpriteKind.My_Pokemon)
Charmander.setScale(0.1, ScaleAnchor.Middle)
Charmander.setPosition(36, 63)
for (let index = 0; index < 19; index++) {
    Charmander.changeScale(0.1, ScaleAnchor.Middle)
    pause(5)
}
Charmander.setScale(2, ScaleAnchor.Middle)
let HpC = sprites.create(assets.image`Full Hp`, SpriteKind.HP)
HpC.setPosition(126, 67)
pause(1000)
let mySprite = sprites.create(assets.image`myImage3`, SpriteKind.options2)
mySprite.setScale(1, ScaleAnchor.Middle)
mySprite.setPosition(100, 88)
let Item_select = sprites.create(assets.image`myImage4`, SpriteKind.options2)
Item_select.setPosition(100, 108)
let Pkmn_select = sprites.create(assets.image`myImage5`, SpriteKind.options2)
Pkmn_select.setPosition(140, 88)
let Run_select = sprites.create(assets.image`myImage6`, SpriteKind.options2)
Run_select.setPosition(140, 108)
let Selecter = sprites.create(assets.image`myImage`, SpriteKind.selecters)
Selecter.setScale(0.8, ScaleAnchor.Middle)
Variavel_que_eu_selecionei = 0
HpCharm = 20
HpSquirt = 20
forever(function () {
    if (Win == 1 || Lose == 1) {
    	
    } else {
        if (Variavel_que_eu_selecionei == 0) {
            Selecter.setPosition(75, 89)
        }
        if (Variavel_que_eu_selecionei == 1) {
            Selecter.setPosition(115, 89)
        }
        if (Variavel_que_eu_selecionei == 2) {
            Selecter.setPosition(75, 109)
        }
        if (Variavel_que_eu_selecionei == 3) {
            Selecter.setPosition(115, 109)
        }
        if (Option == 1) {
            mySprite.setImage(assets.image`myImage7`)
            mySprite.setPosition(99, 88)
            Pkmn_select.setImage(assets.image`myImage8`)
            Run_select.setImage(assets.image`myImage9`)
            Item_select.setImage(assets.image`myImage9`)
        }
        if (Option == 0) {
            mySprite.setImage(assets.image`myImage3`)
            mySprite.setPosition(100, 88)
            Pkmn_select.setImage(assets.image`myImage5`)
            Run_select.setImage(assets.image`myImage6`)
            Item_select.setImage(assets.image`myImage4`)
            Selecter.setImage(assets.image`myImage`)
        }
        if (Option == -1) {
            mySprite.setImage(assets.image`Nothing2`)
            mySprite.setPosition(100, 88)
            Pkmn_select.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            Run_select.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            Item_select.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            Selecter.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        }
        if (Win == 1) {
            mySprite.setImage(assets.image`Nothing2`)
            mySprite.setPosition(100, 88)
            Pkmn_select.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            Run_select.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            Item_select.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            Selecter.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        }
        if (Lose == 1) {
            mySprite.setImage(assets.image`Nothing2`)
            mySprite.setPosition(100, 88)
            Pkmn_select.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            Run_select.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            Item_select.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            Selecter.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        }
    }
})
forever(function () {
    if (Win == 1 || Lose == 1) {
    	
    } else {
        if (controller.right.isPressed()) {
            if (Variavel_que_eu_selecionei == 3) {
                Variavel_que_eu_selecionei = 0
                pause(200)
            } else {
                Variavel_que_eu_selecionei += 1
                pause(200)
            }
        }
        if (controller.left.isPressed()) {
            if (Variavel_que_eu_selecionei == 0) {
                Variavel_que_eu_selecionei = 3
                pause(200)
            } else {
                Variavel_que_eu_selecionei += -1
                pause(200)
            }
        }
    }
})
forever(function () {
	
})
forever(function () {
    if (Win == 1 || Lose == 1) {
    	
    } else {
        if (HpCharm == 20) {
            HpC.setImage(assets.image`Full Hp`)
        } else {
            if (HpCharm < 20) {
                if (HpCharm < 10) {
                    if (HpCharm < 5) {
                        if (HpCharm < 1) {
                            HpC.setImage(assets.image`Nothing2`)
                            sprites.destroy(Charmander)
                            music.stopAllSounds()
                            music.play(music.createSong(assets.song`you lose`), music.PlaybackMode.UntilDone)
                            mySprite.setImage(assets.image`Nothing2`)
                            mySprite.setPosition(100, 88)
                            Pkmn_select.setImage(img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                `)
                            Run_select.setImage(img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                `)
                            Item_select.setImage(img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                `)
                            Selecter.setImage(img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                `)
                            Lose = 1
                        }
                    } else {
                        HpC.setImage(assets.image`Minus Hp 3`)
                    }
                } else {
                    HpC.setImage(assets.image`Minus Hp 2`)
                }
            } else {
                HpC.setImage(assets.image`Minus Hp 1`)
            }
        }
    }
})
forever(function () {
    if (Win == 1 || Lose == 1) {
    	
    } else {
        if (HpSquirt == 20) {
            SHp.setImage(assets.image`Full Hp`)
        } else {
            if (HpSquirt < 20) {
                if (HpSquirt < 10) {
                    if (HpSquirt < 5) {
                        if (HpSquirt < 1) {
                            SHp.setImage(assets.image`Nothing2`)
                            sprites.destroy(Squirtle)
                            music.stopAllSounds()
                            music.play(music.createSong(assets.song`YOU WIN`), music.PlaybackMode.UntilDone)
                            mySprite.setImage(assets.image`Nothing2`)
                            mySprite.setPosition(100, 88)
                            Pkmn_select.setImage(img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                `)
                            Run_select.setImage(img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                `)
                            Item_select.setImage(img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                `)
                            Selecter.setImage(img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                `)
                            Win = 1
                        }
                    } else {
                        SHp.setImage(assets.image`Minus Hp 3`)
                    }
                } else {
                    SHp.setImage(assets.image`Minus Hp 2`)
                }
            } else {
                SHp.setImage(assets.image`Minus Hp 1`)
            }
        }
    }
})
forever(function () {
    if (Lose == 1) {
        music.play(music.createSong(assets.song`Song after you lose`), music.PlaybackMode.LoopingInBackground)
        SHp.setImage(assets.image`Nothing2`)
        sprites.destroy(Squirtle)
        Blue = sprites.create(assets.image`blue rival`, SpriteKind.Rival)
        Blue.setPosition(160, 39)
        while (Blue.x != 130) {
            pause(5)
            Blue.x += -2
        }
        game.showLongText("BLUE: I am the best!", DialogLayout.Bottom)
        game.gameOver(false)
    } else {
    	
    }
})
forever(function () {
    if (Win == 1) {
        music.play(music.createSong(assets.song`Song after you win`), music.PlaybackMode.LoopingInBackground)
        HpC.setImage(assets.image`Nothing2`)
        Blue = sprites.create(assets.image`blue rival`, SpriteKind.Rival)
        Blue.setPosition(160, 39)
        while (Blue.x != 130) {
            pause(5)
            Blue.x += -2
        }
        game.showLongText("BLUE:It was just luck and that's all!", DialogLayout.Bottom)
        game.gameOver(true)
    } else {
    	
    }
})
