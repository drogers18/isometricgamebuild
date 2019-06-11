// Randomize the blocks

/*
 	var blockcount = (Math.floor(Math.random() * 20) + 1) * 2;
	var blockcount = blockcount * blockcount;
	
	var mapedge = (Math.floor(Math.sqrt(blockcount)));
*/

// Map between index and filename
		var IsometricMap = new Object();
		
		  IsometricMap.tiles = [
			// "images/dirt.png",
			"images/dirtHigh.png", 		// 0
			"images/grass.png",			// 1
			"images/water.png",			// 2
			"images/waterBeachCornerEast.png",	// 3
			"images/waterBeachCornerNorth.png",	// 4
			"images/waterBeachCornerSouth.png",	// 5
			"images/waterBeachCornerWest.png",	// 6
			"images/waterBeachEast.png",	// 7
			"images/waterBeachNorth.png",	// 8
			"images/waterBeachSouth.png",	// 9
			"images/waterBeachWest.png",	// 10
			"images/waterCornerEast.png",	// 11
			"images/waterCornerNorth.png",	// 12
			"images/waterCornerSouth.png",	// 13
			"images/waterCornerWest.png",	// 14
			"images/waterEast.png",		// 15
			"images/waterNorth.png",		// 16
			"images/waterSouth.png",		// 17
			"images/waterWest.png",		// 18
			"images/bridgeEast.png",		// 19
			"images/bridgeNorth.png",		// 20
			"images/crossroad.png",		// 21
			// "images/hillCornerEast.png",
			// "images/hillCornerNW.png",
			// "images/hillCornerSE.png",
			// "images/hillCornerWest.png",
			// "images/hillEast.png",
			// "images/hillNorth.png",
			// "images/hillRoadEast.png",
			// "images/hillRoadNorth.png",
			// "images/hillRoadSouth.png",
			// "images/hillRoadWest.png",
			// "images/hillSouth.png",
			// "images/hillWest.png",
			"images/lot.png",			// 22
			"images/lotCornerEast.png",		// 23
			"images/lotCornerNorth.png",	// 24
			"images/lotCornerSouth.png",	// 25
			"images/lotCornerWest.png",		// 26
			"images/lotEast.png",		// 27
			"images/lotExitEast.png",		// 28
			"images/lotExitNorth.png",		// 29
			"images/lotExitSouth.png",		// 30
			"images/lotExitWest.png",		// 31
			"images/lotNorth.png",		// 32
			"images/lotPark.png",		// 33
			"images/lotSouth.png",		// 34
			"images/lotWest.png",		// 35
			"images/roadCornerES.png",		// 36
			"images/roadCornerNE.png",		// 37
			"images/roadCornerNW.png",		// 38
			"images/roadCornerWS.png",		// 39
			"images/roadEast.png",		// 40
			"images/roadEndEast.png",		// 41
			"images/roadEndNorth.png",		// 42
			"images/roadEndSouth.png",		// 43
			"images/roadEndWest.png",		// 44
			"images/roadNorth.png",		// 45
			"images/roadTEast.png",		// 46
			"images/roadTNorth.png",		// 47
			"images/roadTSouth.png",		// 48
			"images/roadTWest.png"];	// 49	
	
			


	
 	var blockcount = (Math.floor(Math.random() * 20) + 1) * 2;
	var columngen = new Array();
	IsometricMap.map = new Array(); 
	
	var i=0;
	while(i < (blockcount)) { 
	
	var numberoftiles = IsometricMap.tiles.length;
	var terrainrandoms = (Math.floor(Math.random() * numberoftiles) + 0);	
	var randomiteration = (Math.floor(Math.random() * blockcount) + 0);	
	columngen.push(terrainrandoms);	
	IsometricMap.map.push(columngen);
	
	i++;
	}

	
	
	

	//var newrandomrow = (Math.floor(Math.random() * (columngen.length)) + 0);	

/*	
	var y=0;
	while(y < blockcount) {
	IsometricMap.map.push(columngen[newrandomrow]);
	y++;
	}
	
*/

	
 
//var IsometricMap.map == mastermappertext;


