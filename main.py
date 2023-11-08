@namespace
class SpriteKind:
    My_Pokemon = SpriteKind.create()
scene.set_background_color(1)
Charmander = sprites.create(assets.image("""
    myImage0
"""), SpriteKind.My_Pokemon)
Charmander.set_scale(2, ScaleAnchor.MIDDLE)
Charmander.set_position(36, 68)