import sharp from 'sharp';
import {mkdir} from 'node:fs/promises';
const jobs = [
 ['NOX Noir Glass Perfume Bottle.png','products/nox/primary.webp',1536],
 ['ORYNOVA Fuego Amber PerfumeBottle.png','products/fuego/primary.webp',1024],
 ['Luxurious Lazo Burgundy Perfume Bottle.png','products/lazo/primary.webp',1024],
 ['Orynova Arabian Nights Perfume Collection.png','hero/campaign-mobile.webp',941],
 ['ORYNOVA Perfume Collection in Golden Twilight.png','hero/campaign-desktop.webp',1536],
 ['Orynova Luxury Perfume Collection.png','storytelling/collection-packaging.webp',1672]
];
for (const [source, name, width] of jobs) {
 const target = `public/images/${name}`;
 await mkdir(target.slice(0,target.lastIndexOf('/')), {recursive:true});
 await sharp(source).resize({width,withoutEnlargement:true}).webp({quality:88,effort:6}).toFile(target);
 console.log(target);
}
