
import aboutImage from "./images/about.png";
import slideMain from "./images/heroslides/main.png";
import slideMainMobile from "./images/heroslides/main-mobile.jpg";
import slideEquipment from "./images/heroslides/slide-2.png";
import slideEquipmentMobile from "./images/heroslides/slide-2-mobile.jpg";
import slideJackets from "./images/heroslides/slide-3.png";
import slideJacketsMobile from "./images/heroslides/slide-3-mobile.jpg";
import slideGlowSigns from "./images/heroslides/slide-4.png";
import slideGlowSignsMobile from "./images/heroslides/slide-4-mobile.jpg";
import slideSignage from "./images/heroslides/slide-5.png";
import slideSignageMobile from "./images/heroslides/slide-5-mobile.jpg";
import cutoutBarrier from "./images/products/barrier.png";
import cutoutBreaker from "./images/products/breaker.png";
import cutoutCone from "./images/products/cone.png";
import cutoutDelineator from "./images/products/delineator.png";
import cutoutExitSign from "./images/products/exitSign.png";
import cutoutJacket from "./images/products/jacket.png";
import cutoutMarker from "./images/products/marker.png";
import cutoutMirror from "./images/products/mirror.png";
import cutoutReflector from "./images/products/reflector.png";
import cutoutStud from "./images/products/stud.png";
import cutoutTactileStud from "./images/products/tactileStud.png";
import cutoutTile from "./images/products/tile.png";
import logoMark from "./Logo.jpg";
import logoLockup from "./Logo.webp";
import airports from "./images/industries/airports.png"
import highways from "./images/industries/highways.png"
import hospitals from "./images/industries/hospitals.png"
import parking from "./images/industries/parking.png"
import railways from "./images/industries/railways.png"
import schools from "./images/industries/schools.png"
import roads from "./images/industries/urban-roads.png"
import banks from "./images/industries/banks.png"
import industrial from "./images/industries/industrial-facility.png"
import construction from "./images/industries/construction-site.png"

export const IMAGES = {
  // About section collage (supplied asset)
  aboutImage,
  // Supplied heroslides backgrounds + generated mobile portraits
  slideMain,
  slideMainMobile,
  slideEquipment,
  slideEquipmentMobile,
  slideJackets,
  slideJacketsMobile,
  slideGlowSigns,
  slideGlowSignsMobile,
  slideSignage,
  slideSignageMobile,

  // industries images
  airports, banks, highways, parking, railways, schools, roads, hospitals, industrial, construction,

  // Brand marks
  logoMark,
  logoLockup,
  // Transparent product cutouts, keyed by ProductCutout `art` name
  productCutouts: {
    barrier: cutoutBarrier,
    breaker: cutoutBreaker,
    cone: cutoutCone,
    delineator: cutoutDelineator,
    exitSign: cutoutExitSign,
    jacket: cutoutJacket,
    marker: cutoutMarker,
    mirror: cutoutMirror,
    reflector: cutoutReflector,
    stud: cutoutStud,
    tactileStud: cutoutTactileStud,
    tile: cutoutTile,
  },
};

export default IMAGES;
