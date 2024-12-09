(function () {
	
const { PI } = Math;

Math.cn = {
	mod,
	arg,
	add,
	sub,
	mul,
	div,
	pow,
	roots,
	cis
};

function _fix(n) {
	const ns = n+'';
	if (/\d+\.([09])\1{4,}/.test(ns)) {
		return Math.round(n);
	}
	if (/\d+\.\d([09])\1{4,}/.test(ns)) {
		return Math.round(n*10)/10;
	}
	return n;
}

function mod([a,b]) {
	return _fix(
		Math.sqrt((a**2)+(b**2))
	);
}

function arg([a,b]) {
	if (a === 0) {
		if (b > 0) return PI/2;
		if (b < 0) return -PI/2;
		return null;
	} else {
		let theta = Math.atan2(b,a);
		if (a < 0) {
			if (b >= 0) theta += PI;
			else theta -= PI;
		}
		return _fix(theta);
	}
}

function add(z1,z2) {
	const [a1,b1] = z1;
	const [a2,b2] = z2;
	return [_fix(a1+a2), _fix(b1+b2)];
}

function sub(z1,z2) {
	const [a1,b1] = z1;
	const [a2,b2] = z2;
	return [_fix(a1-a2), _fix(b1-b2)];
}

function mul(z1,z2) {
	const [a1,b1] = z1;
	const [a2,b2] = z2;
	return [
	 _fix(a1*a2-b1*b2),
	 _fix(a1*b2+a2*b1)
	];
}

function div(z1,z2) {
	const [a1,b1] = z1;
	const [a2,b2] = z2;
	const d = (a2**2) + (b2**2);
	return [
	 _fix((a1*a2+b1*b2)/d),
	 _fix((a2*b1-a1*b2)/d)
	];
}

function pow(z,p) {
	const r = mod(z);
	const phi = arg(z);
	return cis(r**p, p*phi);
}

function roots(z,n) {
	const rt = [];
	const r = mod(z)**(1/n);
	const phi_ = arg(z)/n;
	for (let k=0; k<n; k++) {
		rt.push(cis(
			r, phi_ + (2*PI*k)/n
		));
	}
	return rt;
}

function cis(r,phi) {
	return [
	 _fix(r*Math.cos(phi)),
	 _fix(r*Math.sin(phi))
	];
}

})()
