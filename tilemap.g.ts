// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`11000900020202020202020202020202020202020206060606060606060606060606060606060603030603030603030603030603030306060104030303060303060104030303030606030306010403010403030306030303060603050603030603030603030603030306060606060606060606060606060606060602020202020202020202020202020202020202020202020202020202020202020202`, img`
. . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . 2 . . 2 . . 2 . . 2 . . . 2 
2 . . . . . 2 . . 2 . . . . . . 2 
2 . . 2 . . . . . . . . 2 . . . 2 
2 . . 2 . . 2 . . 2 . . 2 . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tilePath5,sprites.castle.tileGrass3,sprites.castle.tileGrass1,sprites.skillmap.islandTile4,sprites.dungeon.floorDark0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
