#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {
	float treshhold = 200.;
	
	vec2 position = gl_FragCoord.xy - mouse.xy * resolution.xy; 
	float rad = sqrt(position.x * position.x + position.y * position.y) ;
	float amp = (treshhold-rad)/treshhold;
	if(amp<0.0){ amp=0.0;}
	float gray = (sin(rad/ 10. - time * 3.)+0.5)*amp;
	gl_FragColor = vec4(gray,gray,gray, 1.0 );
}

