var Ship = Polygon.extend({

	maxX: null,
	maxY: null,

	init: function(p, pf, s, x, y) {
		this._super(p);

		this.flames = new Polygon(pf);
		this.flames.scale(s);

		this.x = x;
		this.y = y;

		this.scale(s);

		this.angle = 0;

		this.vel = {
			x: 0,
			y: 0
		}
	},

	addVel: function() {

		if (this.vel.x * this.vel.x + this.vel.y * this.vel.y < 20 * 20) {
			this.vel.x += 0.05 * Math.cos(this.angle);
			this.vel.y += 0.05 * Math.sin(this.angle);
		}
	},

	rotate: function(theta) {
		this._super(theta);

		this.flames.rotate(theta);
		this.angle += theta;
	},

	update: function() {
		this.x += this.vel.x;
		this.y += this.vel.y;

		this.vel.x *= 0.99;
		this.vel.y *= 0.99;

		if (this.x > this.maxX) {
			this.x = 0;
		} else if (this.x < 0) {
			this.x = this.maxX;
		}

		if (this.y > this.maxY) {
			this.y = 0;
		} else if (this.y < 0) {
			this.y = this.maxY;
		}
	},

	draw: function(ctx) {
		ctx.drawPolygon(this, this.x, this.y);
		ctx.drawPolygon(this.flames, this.x, this.y);
	}
});