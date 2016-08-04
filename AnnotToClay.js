//no arguments

///////////CODE/////////////

print('Script by ctRy');

var rect = dimension.getExtent();

var annotLayer = wp.getLayer().withName('Annotations').go();

var terrainArr = [org.pepsoft.worldpainter.Terrain.WHITE_STAINED_CLAY, org.pepsoft.worldpainter.Terrain.ORANGE_STAINED_CLAY, org.pepsoft.worldpainter.Terrain.MAGENTA_STAINED_CLAY, org.pepsoft.worldpainter.Terrain.LIGHT_BLUE_STAINED_CLAY, org.pepsoft.worldpainter.Terrain.YELLOW_STAINED_CLAY, org.pepsoft.worldpainter.Terrain.LIME_STAINED_CLAY, org.pepsoft.worldpainter.Terrain.PINK_STAINED_CLAY, org.pepsoft.worldpainter.Terrain.LIGHT_GREY_STAINED_CLAY, org.pepsoft.worldpainter.Terrain.CYAN_STAINED_CLAY, org.pepsoft.worldpainter.Terrain.PURPLE_STAINED_CLAY, org.pepsoft.worldpainter.Terrain.BLUE_STAINED_CLAY, org.pepsoft.worldpainter.Terrain.BROWN_STAINED_CLAY, org.pepsoft.worldpainter.Terrain.GREEN_STAINED_CLAY, org.pepsoft.worldpainter.Terrain.RED_STAINED_CLAY, org.pepsoft.worldpainter.Terrain.BLACK_STAINED_CLAY];

for (var x = rect.getX() * 128; x < rect.getWidth() * 128; x++) {
    for (var y = rect.getY() * 128; y < rect.getHeight() * 128; y++) {
		var num = dimension.getLayerValueAt(annotLayer, x, y);
		if (num != 0)
		{
			dimension.setTerrainAt(x, y, terrainArr[num - 1]);
			dimension.setLayerValueAt(annotLayer, x, y, 0);
		}
    }
}

print('Done! :D');