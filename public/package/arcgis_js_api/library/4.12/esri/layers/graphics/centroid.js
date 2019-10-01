// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(C,x){function B(a,b,g,m,c,f){f=c?f?4:3:f?3:2;var h=g,k=g+f,q=0,l=0,p=g=0,r=0,v=0;for(--m;v<m;v++,h+=f,k+=f){var d=b[h],n=b[h+1],t=b[h+2],u=b[k],w=b[k+1],y=b[k+2],e=d*w-u*n,p=p+e,q=q+(d+u)*e,l=l+(n+w)*e;c&&(e=d*y-u*t,g+=(t+y)*e,r+=e);d<a[0]&&(a[0]=d);d>a[1]&&(a[1]=d);n<a[2]&&(a[2]=n);n>a[3]&&(a[3]=n);c&&(t<a[4]&&(a[4]=t),t>a[5]&&(a[5]=t))}0<p&&(p*=-1);0<r&&(r*=-1);if(!p)return null;a=[q,l,.5*p];c&&(a[3]=g,a[4]=.5*r);return a}function A(a,b,g,m,c){c=m?c?4:3:c?3:
2;for(var f=b,h=b+c,k=0,q=0,l=0,p=0,r=0,v=g-1;r<v;r++,f+=c,h+=c){var d=a[f],n=a[f+1],t=a[f+2],u=a[h],w=a[h+1],y=a[h+2],e;if(m){e=u-d;var z=w-n,x=y-t;e=Math.sqrt(e*e+z*z+x*x)}else e=u-d,z=w-n,e=Math.sqrt(e*e+z*z);e&&(k+=e,m?(d=[d+.5*(u-d),n+.5*(w-n),t+.5*(y-t)],q+=e*d[0],l+=e*d[1],p+=e*d[2]):(d=[d+.5*(u-d),n+.5*(w-n)],q+=e*d[0],l+=e*d[1]))}return 0<k?m?[q/k,l/k,p/k]:[q/k,l/k]:0<g?m?[a[b],a[b+1],a[b+2]]:[a[b],a[b+1]]:null}Object.defineProperty(x,"__esModule",{value:!0});x.getCentroidOptimizedGeometry=
function(a,b,g,m){if(!b||!b.lengths.length)return null;a.lengths.length&&(a.lengths.length=0);a.coords.length&&(a.coords.length=0);for(var c=a.coords,f=[],h=g?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],k=b.lengths,q=b.coords,l=g?m?4:3:m?3:2,p=0,r=0;r<k.length;r++){var v=k[r],d=B(h,q,p,v,g,
m);d&&f.push(d);p+=v*l}f.sort(function(a,c){var b=a[2]-c[2];0===b&&g&&(b=a[4]-c[4]);return b});f.length&&(l=6*f[0][2],c[0]=f[0][0]/l,c[1]=f[0][1]/l,g&&(l=6*f[0][4],c[2]=0!==l?f[0][3]/l:0),c[0]<h[0]||c[0]>h[1]||c[1]<h[2]||c[1]>h[3]||g&&(c[2]<h[4]||c[2]>h[5]))&&(c.length=0);if(!c.length)if(b=b.lengths[0]?A(q,0,k[0],g,m):null)c[0]=b[0],c[1]=b[1],g&&2<b.length&&(c[2]=b[2]);else return null;return a};x.lineCentroid=A});