var GameState = State.extend({

	init: function(game) {
		this._super(game);
		this.poly = new Polygon([-1, -1, 1, 1, -1, 1, -1, -1]);
		this.poly.scale(50);
	},

	handleInputs: function() {},

	update: function() {
		this.poly.rotate(0.01);
	},

	render: function(ctx) {
		ctx.clearAll();
		ctx.drawPolygon(this.poly, 100, 100);
	}
});