var AsteroidSize = 8;

var GameState = State.extend({

	init: function(game) {
		this._super(game);

		this.canvasWidth = game.canvas.ctx.width;
		this.canvasHeight = game.canvas.ctx.height;

		this.ship = new Ship(Points.SHIP, Points.FLAMES, 2, this.canvasWidth / 2, this.canvasHeight / 2);
		this.ship.maxX = this.canvasWidth;
		this.ship.maxY = this.canvasHeight;

		this.generateLvl();
	},

	generateLvl: function() {
		var num = 3;

		this.asteroids = [];

		for (var i = 0; i < num; i++) {

			var n = Math.round(Math.random() * (Points.ASTEROIDS.length - 1));
			var astr = new Asteroid(Points.ASTEROIDS[n], AsteroidSize, 100, 100);

			astr.maxX = this.canvasWidth;
			astr.maxY = this.canvasHeight;

			this.asteroids.push(astr);
		}
		this.asteroidsCount = this.asteroids.length;

	},

	handleInputs: function(input) {
		if (input.isDown("right")) {
			this.ship.rotate(0.06);
		}
		if (input.isDown("left")) {
			this.ship.rotate(-0.06);
		}

		if (input.isDown("up")) {
			console.log(this.ship);
			this.ship.addVel();
		}
		if (input.isDown("down")) {
			console.log(this.ship);
		}
	},

	update: function() {
		for (var i = 0, len = this.asteroids.length; i < len; i++) {
			this.asteroids[i].update();
		}
		this.ship.update();
	},

	render: function(ctx) {
		ctx.clearAll();
		for (var i = 0, len = this.asteroids.length; i < len; i++) {
			this.asteroids[i].draw(ctx);
		}
		this.ship.draw(ctx);
	}
});