    function toggleDropdown(id) {
    const element = document.getElementById(id);
    if (element) {
      element.classList.toggle('show');
    }
  }


    // Product data with categories
    const productData = [
    {
    sectionTitle: "Physics Lab Equipment",
    category: "plustwoPhysics",
    viewMoreLink: "./products-page/physics-equipment.html",
    products: [
      { title: "Inclined Plane 3", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/InclinedPlane3.html",model:"112" },
      { title: "Inertia Table", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/Inertia-Table.html" ,model:"112"},
      { title: "Torsion Pendulum", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/torsion-pendulum.html",model:"112" },
      { title: "Kater's Reversible Pendulum", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/KatertsReversible-Pendulum.html",model:"112" },
      { title: "Simple Pendulum Stand", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/Simple-Pendulum-Stand.html" ,model:""},
      { title: "Compound Bar Pendulum", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/Compound-Bar-Pendulum.html",model:"" },
      { title: "Young's Modulus App(Searl's)", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/Youngs-Modulus-App.html",model:"" },
      { title: "Parallelogram of Forces App", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/parallelogram.html" ,model:""},
      { title: "Rising Table Apparatus(SLow Motion Stand)", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/rising-table.html",model:"" },
      { title: "Jaeger's Surface Tension Apparatus", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/jaeger-surface.html" ,model:""},
      { title: "Viscosity Apparatus Stoke's Method", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/viscosity.html" ,model:""},
      { title: "Sonometer", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/snometer.html" ,model:""},
      { title: "Wave Motion Apparatus", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/wave-motion.html" ,model:""},
      { title: "Tuning Fork Welch Type Medium", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/tuning-fork-medium.html",model:"" },
      { title: "Resonance  Apparatus", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/resonance.html" },
      { title: "Resistance in Series or Parallel Kit", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/resistance-in-series.html" ,model:""},
      { title: "Triode Valve Characteristic Apparatus", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/triod-value.html" ,model:""},
      { title: "Ohm's Law Apparatus", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/ohms-law.html" ,model:""},
      { title: "PN Junction Diode Characteristic Apparatus", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/pn-junction.html",model:"" },
      { title: "Zener  Diode  Characteristic Apparatus", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/zener-diode.html" ,model:""},
      { title: "Transistor Characteristic Apparatus", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/transistor.html",model:"" },
      { title: "Half Wave/Full Wave & bridge Rectifier", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/half-wave-rectifier.html" ,model:""},
      { title: "Leclanche Cell Apparatus", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/leclanche-cell.html" ,model:""},
      { title: "Verification  Of KCL and KVL", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/verify-kcl-kvl.html" ,model:""},
      { title: "Solar Cell Characteristic Apparatus", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/solar-cell.html" ,model:""},
      { title: "Daniel Cell Apparatus", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/daniel-cell.html" },
      { title: "IC  Regulated  Battery Eliminator", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/ic-regulatorbattery.html",model:"" },
      { title: "Micro-Ammeter", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/micro-ammeter.html" ,model:""},
      { title: "Voltmeter", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/voltmeter.html" ,model:""},
      { title: "Galvanometer", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/galvanometer.html" ,model:""},
      { title: "Rheostat 4.4 cm Dia Porcelain Tube", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/rheostat-tube.html" ,model:""},
      { title: "Tangent Galvanometer", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/tangent-galvanometer.html" ,model:""},
      { title: "Tangent Galvanometer Export Quality", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/tangentgalvanometer.html" ,model:""},
      { title: "Spectrometer  Standrad", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/spectrometer-standard.html" ,model:""},
      { title: "Optical Bench Double Rod", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/optical-bench.html" },
      { title: "Travelling Microscope SSA-41", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/travelling-microscope.html" ,model:""},
      { title: "Glass Slab", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/glass-slab.html" ,model:""},
      { title: "Glass Prism", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/glass-prism.html" ,model:""},
      { title: "Spectrometer Prism", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/spectrometer-prism.html" ,model:""},
      { title: "Physical Balance", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/physical-balance.html",model:"" },
      { title: "Analytical Balance", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/analytical-balance.html",model:"" },
      { title: "Potentiometer 10 wire", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/potentiometer.html",model:"" },
      { title: "Meter Bridge", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/meter-bridge.html",model:"" },
      { title: "Resistance Box", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/resistance-box.html" ,model:""},
      { title: "Resistance Coil", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/resistance-coil.html" ,model:""},
      { title: "Resistance Box Plug Type(High Value)", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/resistance-box-high.html" ,model:""},
      { title: "Vernier  Calipers", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/vernier-calipers.html" ,model:""},
      { title: "Micrometer Screw Gauge", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/micrometer.html" ,model:""},
      { title: "Shperometer Pye Type Double Disc", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/spectrometer-standard.html",model:"" },
      { title: "Concave and Convex Mirror", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/concave-convex-mirror.html" ,model:""},
      { title: "Double Convex Lens", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/double-convex-lens.html",model:"" },
      { title: "Magnifiers", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/magnifiers.html" ,model:""},
      { title: "Double Concave Lens", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/double-concave-lens.html" ,model:""},
      { title: "Digital Multimeter", model: "", image: "./assets/images/products/physics-placeholder.jpg", link: "plus2product/digital-multimeter.html" ,model:""}
    ]
  },
     
  {
        sectionTitle: "Chemistry Lab Equipment",
        category: "plustwoChemistry",  // Added category for filtering
        viewMoreLink: "./products-page/chemistry-biology-equipment.html",
        products: [
  { title: "Black Phosphorus Model", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/black-phosphorus-model.html" },
  { title: "Blow Pipe Brass", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/blow-pipe-brass.html" },
  { title: "Boss Head", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/boss-head.html" },
  { title: "Bottle Brush", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/bottle-brush.html" },
  { title: "Bunsen Burner Stopcock", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/bunsen-burner-stopcock.html" },
  { title: "Burette Brush", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/burette-brush.html" },
  { title: "Burette Clamp Brass", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/burette-clamp-brass.html" },
  { title: "Burette Clamp Fisher", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/burette-clamp-fisher.html" },
  { title: "Burette Stand Wood", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/burette-stand-wood.html" },
  { title: "Clinical Centrifuge", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/clinical-centrifuge.html" },
  { title: "Copper Turning", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/copper-turning.html" },
  { title: "Crucible Tong", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/crucible-tong.html" },
  { title: "Defflagrating Spoon", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/defflagrating-spoon.html" },
  { title: "Diamond Crystal Model", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/diamond-crystal-model.html" },
  { title: "Digital Colorimeter", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/digital-colorimeter.html" },
  { title: "Digital Conductivemeter", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/digital-conductivemeter.html" },
  { title: "Digital Melting Point Apparatus", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/digital-melting-point-apparatus.html" },
  { title: "Digital Ph Meter", model: "112", image: ".assets\images\+2images\Digital-pH-Meter.png", link: "plustwo-che-products/Digitalphmeter.html" },
  { title: "ESR Stand", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/esr-stand.html" },
  { title: "Filter Paper Round", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/filter-paper-round.html" },
  { title: "Funnel Stand Wood", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/funnel-stand-wood.html" },
  { title: "Gooch Crucible", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/gooch-crucible.html" },
  { title: "Graphite Crystal Model", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/graphite-crystal-model.html" },
  { title: "Heating Mental", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/heating-mental.html" },
  { title: "Hoffman Screw Clip", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/hoffman-screw-clip.html" },
  { title: "Hot Air Oven", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/hot-air-oven.html" },
  { title: "Hot Plate", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/hot-plate.html" },
  { title: "Incubator", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/incubator.html" },
  { title: "Isotopes Of Hydrogen", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/isotopes-of-hydrogen.html" },
  { title: "Jaw Clamp", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/jaw-clamp.html" },
  { title: "Lead Shots", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/lead-shots.html" },
  { title: "Litmus Paper", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/litmus-paper.html" },
  { title: "Magnesium Metal Ribbon", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/magnesium-metal-ribbon.html" },
  { title: "Magnesium Ribbon", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/magnesium-ribbon.html" },
  { title: "Orbit Of Atom", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/orbit-of-atom.html" },
  { title: "Ph Paper", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/ph-paper.html" },
  { title: "Pinch Clip", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/pinch-clip.html" },
  { title: "Pipette Bulb", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/pipette-bulb.html" },
  { title: "Platinum Loop Holder", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/platinum-loop-holder.html" },
  { title: "Platinum Loop", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/platinum-loop.html" },
  { title: "Platinum Wire", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/platinum-wire.html" },
  { title: "Retort Stand Cast", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/retort-stand-cast.html" },
  { title: "Retort Stand Sheet", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/retort-stand-sheet.html" },
  { title: "Retort Stand Ss", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/retort-stand-ss.html" },
  { title: "Rubber Corks", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/rubber-corks.html" },
  { title: "Silica Crucible", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/silica-crucible.html" },
  { title: "Silicacrucible", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/silicacrucible.html" },
  { title: "Silicon Electronic Configuration", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/silicon-electronic-configuration.html" },
  { title: "Sodium Chloride Hydrocarbon Model", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/sodium-chloride-hydrocarbon-model.html" },
  { title: "Spatula Ss", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/spatula-ss.html" },
  { title: "Spirit Lamp Aluminium", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/spirit-lamp-aluminium.html" },
  { title: "Spirit Lamp Brass", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/spirit-lamp-brass.html" },
  { title: "Spirit Lamp Stainless Steel", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/spirit-lamp-stainless-steel.html" },
  { title: "Spirit Level Aluminium", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/spirit-level-aluminium.html" },
  { title: "Spirit Level Wood", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/spirit-level-wood.html" },
  { title: "Structure Of Atom", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/structure-of-atom.html" },
  { title: "Sulphur Atomic Model", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/sulphur-atomic-model.html" },
  { title: "Test Tube Brush", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/test-tube-brush.html" },
  { title: "Test Tube Holder", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/test-tube-holder.html" },
  { title: "Test Tube Stand", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/test-tube-stand.html" },
  { title: "Three Finger Clamp", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/three-finger-clamp.html" },
  { title: "Tripod Stand", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/tripod-stand.html" },
  { title: "Universal Condenser Clamp", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/universal-condenser-clamp.html" },
  { title: "Watch Glass", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/watch-glass.html" },
  { title: "Water Bath", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/water-bath.html" },
  { title: "Waterbath", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/waterbath.html" },
  { title: "Wire Gauge", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/wire-gauge.html" },
  { title: "Yellow Phosphorus Model", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/yellow-phosphorus-model.html" },
  { title: "Zinc Granules", model: "112", image: "./assets/images/products/chemistry-placeholder.jpg", link: "plustwo-che-products/zinc-granules.html" }
]
  
      },
  {
    sectionTitle: "Mechanical Lab Equipment",
    category: "mechanicsLab",
    viewMoreLink: "./products-page/plus3-physics-equipment/",
    products: [
    // { title: "MECHANICS LAB INdotek ", link: "./products-page/plus3-physics-equipment/mechanics-lab.html" ,model:""},
  { title: "Capillary Rise Apparatus", link: "./products-page/plus3-physics-equipment/capillary-rise-apparatus.html",image:"./assets/images/+3image/mechanics1.png" },
  { title: "Sextant Apparatus", link: "./products-page/plus3-physics-equipment/sextant-apparatus.html",image:"./assets/images/+3image/sexant.png" },
  { title: "Fly Wheel Apparatus", link: "./products-page/plus3-physics-equipment/fly-wheel-apparatus.html",model:"SPML-003" ,image:"./assets/images/+3image/flywheel.png"},
  { title: "Optical Lever Apparatus", link: "./products-page/plus3-physics-equipment/optical-lever-apparatus.html" ,model:"SPML-004",image:"./assets/images/+3image/opticalbeach.png"},
  { title: "Maxwell Needle", link: "./products-page/plus3-physics-equipment/maxwell-needel.html", model:"SPML-005" ,image:"./assets/images/+3image/maxwell.png"},
  // { title: "Searle's Method (Basic)", link: "./products-page/plus3-physics-equipment/searle-basic-method.html",model:"SPML-006" },
  { title: "Searle's Method (Elastic Constants)", link: "./products-page/plus3-physics-equipment/searle-digital-method.html",model:"SPML-006" ,image:"./assets/images/+3image/searls1.png"},
  { title: "Searle's Method (Elastic Constants)", link: "./products-page/plus3-physics-equipment/searle-elastic-method.html",model:"SPML-006A" ,image:"./assets/images/+3image/searls2.png"},
  // { title: "Searle's Method A", link: "./products-page/plus3-physics-equipment" },
  { title: "Bar Pendulum (Advance)", link: "./products-page/plus3-physics-equipment/bar-pendulum-advance.html",model:"SPML-007A",image:"./assets/images/+3image/barpendulumk.png" },
  { title: "Bar Pendulum (Basic)", link: "./products-page/plus3-physics-equipment/bar-pendulum-basic.html" ,model:"SPML-007B",image:"./assets/images/+3image/barpendulunbasic.png"},
  { title: "Bar Pendulum (Digital Counter)", link: "./products-page/plus3-physics-equipment/bar-pendulum-digital.html" ,model:"SPML-007D",image:"./assets/images/+3image/bardigital.png"},
  { title: "Kater's Pendulum (Advance)", link: "./products-page/plus3-physics-equipment/kater-pendulum-advance.html",model:"SPML-008A",image:"./assets/images/+3image/katerpendulum.png" },
  { title: "Kater's Pendulum (Basic)", link: "./products-page/plus3-physics-equipment/kater-pendulum-basic.html",model:"SPML-008B" ,image:"./assets/images/+3image/katerbasic.png"},
  { title: "Kater's Pendulum (Digital)", link: "./products-page/plus3-physics-equipment/kater-pendulum-digital.html" ,model:"SPML-008D",image:"./assets/images/+3image/katerdigital.png"},
  { title: "Spring Constant Apparatus", link: "./products-page/plus3-physics-equipment/spring-constant.html" ,model:"SPML-009",image:"./assets/images/+3image/spring.png"},
  { title: "Poiseuille's Method", link: "./products-page/plus3-physics-equipment/poiseille-method.html",model:"SPML-010" ,image:"./assets/images/+3image/stock.png"},
  { title: "Barton Apparatus (Horizontal)", link: "./products-page/plus3-physics-equipment/bartonapp-horizontal.html",model:"SPML-011H",image:"./assets/images/+3image/" },
  { title: "Barton Apparatus (Vertical)", link: "./products-page/plus3-physics-equipment/bartonapp-vertical.html" ,model:"SPML-011V"},
  { title: "Bending of Beam (Double)", link: "./products-page/plus3-physics-equipment/bendingofbeam-double.html",model:"SPML-012" },
  { title: "Bending of Beam (Single)", link: "./products-page/plus3-physics-equipment/bendingofbeam-single.html" ,model:"SPML-012"},
  { title: "Sonometer (Basic)", link: "./products-page/plus3-physics-equipment/sonometer-basic.html" ,model:"SPML-013B"},
  { title: "Sonometer (Electric)", link: "./products-page/plus3-physics-equipment/sonometer-electric.html",model:"SPML-013E" },
  { title: "Young's Modulus of Rubber", link: "./products-page/plus3-physics-equipment/youngmodulus.html",model:"SPML-014" },
  { title: "Magnifying Power of Telescope", link: "./products-page/plus3-physics-equipment/magnifyingpower.html" ,model:"SPML-015"},
  { title: "Radius of Curvature of Concave/Convex Mirror", link: "./products-page/plus3-physics-equipment/radiusofconcave-convex.html",model:"SPML-016" },
  { title: "Simple Pendulum", link: "./products-page/plus3-physics-equipment/simple-pendulum.html" ,model:"SPML-017"},
  { title: "Lami's Theorem", link: "./products-page/plus3-physics-equipment/lami-theorem.html" ,model:"SPML-018"},
  { title: "Stoke's Apparatus", link: "./products-page/plus3-physics-equipment/stokeapp.html" ,model:"SPML-019"},
  { title: "Optical Bench", link: "./products-page/plus3-physics-equipment/opticalbench.html" ,model:"SPML-020"},
  { title: "Half Deflection Method & Figure of Merit", link: "./products-page/plus3-physics-equipment/half-deflectionmethod.html",model:"SPML-021" },
    ]
  },
  {
    category: 'emLab',
    sectionTitle: 'Electromagnetism Lab Equipment',
    viewMoreLink: "./products-page/plus3-physics-equipment/",
    products: [
      // {title: "Electricity & Magnetism Lab", link: "./products-page/plus3-physics-equipment/electricity-magnetism-lab.html" ,model:""},
      { title: "Digital Multimeter", link: "./products-page/plus3-physics-equipment/digital-multimeter.html", model: "EME-001" },
      { title: "Sensitivity Using Ballistic Galvanometer", link: "./products-page/plus3-physics-equipment/sensitivity-ballistic-galvanometer.html", model: "EME-002" },
      { title: "Leakage Method Using Ballistic Galvanometer", link: "./products-page/plus3-physics-equipment/leakage-ballistic-galvanometer.html", model: "EME-003" },
      { title: "Rayleigh's Bridge Method", link: "./products-page/plus3-physics-equipment/rayleigh-bridge-method.html", model: "EME-004" },
      { title: "Desauty's Bridge", link: "./products-page/plus3-physics-equipment/desauty-bridge.html", model: "EME-005" },
      { title: "Series RC Circuit", link: "./products-page/plus3-physics-equipment/series-rc-circuit.html", model: "EME-006" },
      { title: "LCR Series & Parallel", link: "./products-page/plus3-physics-equipment/lcr-series-parallel.html", model: "EME-007" },
      { title: "Low Resistance by Carey Foster's Bridge (Advance)", link: "./products-page/plus3-physics-equipment/carey-foster-advance.html", model: "EME-008-A" },
      { title: "Low Resistance by Carey Foster's Bridge (Basic)", link: "./products-page/plus3-physics-equipment/carey-foster-basic.html", model: "EME-008-B" },
      { title: "Low Resistance using Potentiometer Trainer Kit", link: "./products-page/plus3-physics-equipment/potentiometer-trainer-kit.html", model: "EME-010" },
      { title: "Thevenin and Norton Theorem Trainer", link: "./products-page/plus3-physics-equipment/thevenin-norton-trainer.html", model: "EME-011" },
      { title: "Superposition Theorem Trainer", link: "./products-page/plus3-physics-equipment/superposition-theorem.html", model: "EME-012" },
      { title: "Maximum Power Transfer Theorem Trainer", link: "./products-page/plus3-physics-equipment/maximum-power-transfer.html", model: "EME-013" },
      { title: "Anderson Bridge Trainer", link: "./products-page/plus3-physics-equipment/anderson-bridge.html", model: "EME-014" },
      { title: "Unknown Resistance Using Meter Bridge", link: "./products-page/plus3-physics-equipment/meter-bridge.html", model: "EME-015" },
      { title: "Triode Valve Characteristics", link: "./products-page/plus3-physics-equipment/triode-valve.html", model: "EME-016" },
      { title: "Diode Valve Characteristics", link: "./products-page/plus3-physics-equipment/diode-valve.html", model: "EME-017" },
      { title: "Compare EMF of Two Cells Using Potentiometer", link: "./products-page/plus3-physics-equipment/compare-emf.html", model: "EME-019" },
      { title: "Earth Magnetic Field by Tangent Galvanometer", link: "./products-page/plus3-physics-equipment/earth-magnetic-field.html", model: "EME-020" },
      { title: "Reduction Factor of a Galvanometer", link: "./products-page/plus3-physics-equipment/reduction-factor.html", model: "EME-021" },
      { title: "Variation of Magnetic Field Along the Axis of Circular Coil", link: "./products-page/plus3-physics-equipment/magnetic-field-circular-coil.html", model: "EME-022" },
      { title: "Field Strength B Variation in a Solenoid", link: "./products-page/plus3-physics-equipment/solenoid-field-variation.html", model: "EME-022A" }
    ],
    
     
  },
  {
    category: 'thermalLab',
    sectionTitle: 'Thermal Physics & Statistical Mechanics Lab Equipment',
    viewMoreLink: "./products-page/plus3-physics-equipment/",
    products: [
      { title: "Callander Barnes Apparatus (Advanced)", link: "./products-page/plus3-physics-equipment/callander-barnes-advanced.html", model: "TPSM-001A" },
      { title: "Callander Barnes Apparatus (Basic)", link: "./products-page/plus3-physics-equipment/callander-barnes-basic.html", model: "TPSM-001B" },
      { title: "Planck's Constant Using LED", link: "./products-page/plus3-physics-equipment/plancks-constant-led.html", model: "TPSM-002" },
      { title: "Stefan Constant Using Bulb", link: "./products-page/plus3-physics-equipment/stefan-constant-bulb.html", model: "TPSM-003" },
      { title: "Thermal Conductivity of Cu by Searle's Apparatus", link: "./products-page/plus3-physics-equipment/searles-apparatus-cu.html", model: "TPSM-004" },
      { title: "Lee's Disc", link: "./products-page/plus3-physics-equipment/lees-disc.html", model: "TPSM-005" },
      { title: "PRT (Platinum Resistance Thermometer)", link: "./products-page/plus3-physics-equipment/prt-platinum-thermometer.html", model: "TPSM-006" },
      { title: "Method of Cooling", link: "./products-page/plus3-physics-equipment/method-of-cooling.html", model: "TPSM-007" },
      { title: "Thermo EMF Across Two Junctions", link: "./products-page/plus3-physics-equipment/thermo-emf-junctions.html", model: "TPSM-008" },
      { title: "Electrochemical Equivalent (ECE) of Copper", link: "./products-page/plus3-physics-equipment/ece-of-copper.html", model: "TPSM-011" }
    ]
  },
  {
    category: 'waveOpticsLab',
    sectionTitle: 'Wave & Optics Lab Equipment',
    viewMoreLink: "./products-page/plus3-physics-equipment/",
    products: [
      { title: "Coupled Oscillation", link: "./products-page/plus3-physics-equipment/coupled-oscillation.html", model: "FE-111" },
      { title: "Melde's Apparatus", link: "./products-page/plus3-physics-equipment/meldes-apparatus.html", model: "WO-001" },
      { title: "Lissajous Figures", link: "./products-page/plus3-physics-equipment/lissajous-figures.html", model: "WO-002" },
      { title: "Wedge Shaped Film", link: "./products-page/plus3-physics-equipment/wedge-shaped-film.html", model: "WO-003" },
      { title: "He-Ne Laser Experiment", link: "./products-page/plus3-physics-equipment/he-ne-laser.html", model: "WO-004" },
      { title: "Cauchy's Constant", link: "./products-page/plus3-physics-equipment/cauchy-constant.html", model: "WO-005" },
      { title: "Newton's Rings (Basic)", link: "./products-page/plus3-physics-equipment/newtons-rings-basic.html", model: "WO-006B" },
      { title: "Newton's Rings (Digital)", link: "./products-page/plus3-physics-equipment/newtons-rings-digital.html", model: "WO-006D" },
      { title: "Fresnel Biprism", link: "./products-page/plus3-physics-equipment/fresnel-biprism.html", model: "WO-007" },
      { title: "Michelson Interferometer with Sodium Light", link: "./products-page/plus3-physics-equipment/michelson-interferometer-sodium.html", model: "WO-010" },
      {title:"Travelling Microscope", link:"./products-page/plus3-physics-equipment/travelling-microscope.html", model:"WO-011"},
      {}
    ]
  },
  {
    category: 'digitalLab',
    sectionTitle: 'Digital System & Applications Lab Equipment',
    viewMoreLink: "./products-page/plus3-physics-equipment/",
    products: [
      {title:"DIgital", link:"./products-page/plus3-physics-equipment/digital.html", model:""},
      { title: "NOT Gate Using Transistor", link: "./products-page/plus3-physics-equipment/not-gate-transistor.html", model: "DAS-001" },
      { title: "Basic Logic Gate", link: "./products-page/plus3-physics-equipment/basic-logic-gate.html", model: "DSA-001B" },
      { title: "Universal Gate - NAND Gate", link: "./products-page/plus3-physics-equipment/universal-gate-nand.html", model: "DAS-002" },
      { title: "Convert Boolean Expression into Logic Circuit", link: "./products-page/plus3-physics-equipment/boolean-expression-to-logic-circuit.html", model: "DAS-003" },
      { title: "Adder & Subtractor Using Logic Gates", link: "./products-page/plus3-physics-equipment/adder-subtractor-logic-gates.html", model: "DIL-004" },
      { title: "Astable & Monostable Multivibrator Using 555 Timer", link: "./products-page/plus3-physics-equipment/multivibrator-555-timer.html", model: "DIL-005" },
      { title: "Flip-Flop Circuits (RS, Clocked RS, D-type, JK) Using NAND Gates", link: "./products-page/plus3-physics-equipment/flip-flop-nand-gates.html", model: "DAS-006" },
      { title: "JK Master Slave Flip-Flop Using Flip-Flop IC", link: "./products-page/plus3-physics-equipment/jk-master-slave-flip-flop.html", model: "DSA-007" },
      { title: "4-Bit Counter Using D-Type, JK Flip-Flop IC", link: "./products-page/plus3-physics-equipment/4bit-counter-flip-flop.html", model: "DSA-008A" },
      { title: "4-Bit Shift Register Using D-Type Flip-Flop", link: "./products-page/plus3-physics-equipment/4bit-shift-register.html", model: "DSA-008B" },
      { title: "Analog & Digital Trainer Kit", link: "./products-page/plus3-physics-equipment/analog-digital-trainer-kit.html", model: "DSA-009" }
    ]
  },
  {
    category: 'modernPhysicsLab',
    sectionTitle: 'Elements of Modern Physics Lab Equipment',
    viewMoreLink: "./products-page/plus3-physics-equipment/",
    products: [
      { title: "Vacuum Diode", link: "./products-page/plus3-physics-equipment/vacuum-diode.html", model: "EMP-001" },
      { title: "Planck's Constant Using LED", link: "./products-page/plus3-physics-equipment/plancks-constant-led.html", model: "EMP-002" },
      { title: "H-Alpha Emission Line of Hydrogen Atom", link: "./products-page/plus3-physics-equipment/h-alpha-hydrogen.html", model: "EMP-003" },
      { title: "Ionization Potential of Mercury", link: "./products-page/plus3-physics-equipment/ionization-potential-mercury.html", model: "EMP-004" },
      { title: "Iodine Vapour Spectrum", link: "./products-page/plus3-physics-equipment/iodine-vapour.html", model: "EMP-005" },
      { title: "e/m by Magnetic Focusing", link: "./products-page/plus3-physics-equipment/em-magnetic-focusing.html", model: "EMP-006" },
      { title: "e/m by Bar Magnet", link: "./products-page/plus3-physics-equipment/em-bar-magnet.html", model: "EMP-007" },
      { title: "Millikan Oil Drop Apparatus", link: "./products-page/plus3-physics-equipment/millikan-oil-drop.html", model: "EMP-008" },
      { title: "Tunnel Diode Apparatus", link: "./products-page/plus3-physics-equipment/tunnel-diode.html", model: "EMP-009" },
      { title: "Diode Laser: Grating", link: "./products-page/plus3-physics-equipment/diode-laser-grating.html", model: "EMP-010A" },
      { title: "Diode Laser: Single & Double Slit", link: "./products-page/plus3-physics-equipment/diode-laser-slits.html", model: "EMP-010B" },
      // { title: "He-Ne Laser: Single & Double Slit", link: "./products-page/plus3-physics-equipment/he-ne-laser-slits.html", model: "EMP-010HN" },
      { title: "Photoelectric Effect", link: "./products-page/plus3-physics-equipment/photoelectric-effect.html", model: "EMP-012" }
    ]
  },
  {
    category: 'analogLab',
    sectionTitle: 'Analog System & Applications Lab Equipment',
    viewMoreLink: "./products-page/plus3-physics-equipment/",
    products: [
      { title: "PN Junction Diode - Forward & Reverse Bias", link: "./products-page/plus3-physics-equipment/pn-junction-forward-reverse.html", model: "ASP-001A" },
      { title: "PN Junction - Boltzmann Constant Determination", link: "./products-page/plus3-physics-equipment/pn-junction-boltzmann-constant.html", model: "ASP-001D" },
      { title: "Zener Diode as Voltage Regulator", link: "./products-page/plus3-physics-equipment/zener-diode-voltage-regulator.html", model: "ASP-002" },
      { title: "Zener Diode Characteristics", link: "./products-page/plus3-physics-equipment/zener-diode-characteristics.html", model: "ASP-002B" },
      { title: "Solar Cell Characteristics", link: "./products-page/plus3-physics-equipment/solar-cell.html", model: "ASP-003" },
      { title: "Solar Cell (Alternate Version)", link: "./products-page/plus3-physics-equipment/solar-cell-detailed.html", model: "ASP-003D" },
      { title: "Transistor Characteristics - PNP & NPN", link: "./products-page/plus3-physics-equipment/transistor-pnp-npn.html", model: "ASP-004" },
      { title: "RC Coupled Amplifier", link: "./products-page/plus3-physics-equipment/rc-coupled-amplifier.html", model: "ASP-006" },
      { title: "Wein Bridge Oscillator using Op-Amp", link: "./products-page/plus3-physics-equipment/wein-bridge-oscillator.html", model: "ASP-007" },
      { title: "LED - Forward & Reverse Bias", link: "./products-page/plus3-physics-equipment/led-forward-reverse.html", model: "ASP-008" },
      { title: "Colpitt's Oscillator", link: "./products-page/plus3-physics-equipment/colpitts-oscillator.html", model: "ASP-009" },
      { title: "Op-Amp - Inverting & Non-Inverting", link: "./products-page/plus3-physics-equipment/opamp-inverting-noninverting.html", model: "ASP-012" },
      { title: "Op-Amp - Integrator & Differentiator", link: "./products-page/plus3-physics-equipment/opamp-integrator-differentiator.html", model: "ASP-017" },
      { title: "Ohm's Law Experiment", link: "./products-page/plus3-physics-equipment/ohms-law.html", model: "ASP-018" }
    ]
  },
  {
    category: 'solidStateLab',
    sectionTitle: 'Solid State Physics Lab Equipment',
    viewMoreLink: "./products-page/plus3-physics-equipment/",
    products: [
      { title: "Dielectric Constant Using Frequency", link: "./products-page/plus3-physics-equipment/dielectric-constant-frequency.html", model: "SSP-000" },
      { title: "Dielectric Constant (SCS Method)", link: "./products-page/plus3-physics-equipment/dielectric-constant-scs.html", model: "SSP-000B" },
      { title: "Quincke's Tube", link: "./products-page/plus3-physics-equipment/quinckes-tube.html", model: "SSP-001" },
      { title: "Gouy's Method", link: "./products-page/plus3-physics-equipment/gouys-method.html", model: "SSP-002" },
      { title: "Dielectric Constant (Solid State)", link: "./products-page/plus3-physics-equipment/dielectric-constant-solid.html", model: "SSP-004" },
      { title: "B-H Curve Setup", link: "./products-page/plus3-physics-equipment/bh-curve.html", model: "SSP-006" },
      { title: "Four Probe Method", link: "./products-page/plus3-physics-equipment/four-probe-method.html", model: "SSP-007" },
      { title: "Hall Effect", link: "./products-page/plus3-physics-equipment/hall-effect.html", model: "SSP-008" },
      // { title: "Solid State Physics Overview", link: "./products-page/plus3-physics-equipment/solid-state-physics-overview.html", model: "SSP-INFO" }
    ]
  },
  // Quantum Mechanics Lab Equipment Data
{
  category: 'qmLab',
  sectionTitle: 'Quantum Mechanics Lab Equipment',
  viewMoreLink: './products-page/plus3-physics-equipment/',
  products: [
    // {
    //   title: 'Electron Spin Resonance Experiment',
    //   link: './products-page/plus3-physics-equipment/electron-spin-resonance.html',
    //   model: 'QMP-005'
    // },
    {
      title: 'Study of Zeeman Effect with Hyperfine Splitting',
      link: './products-page/plus3-physics-equipment/zeeman-effect-hyperfine.html',
      model: 'SK-075'
    },
    {
      title: 'Tunneling Effect in Tunnel Diode Using I-V Characteristics',
      link: './products-page/plus3-physics-equipment/tunneling-effect-tunnel-diode.html',
      model: 'QMP-001'
    },
    {
      title: 'Determine the Diameter of Narrow Wire',
      link: './products-page/plus3-physics-equipment/diameter-narrow-wire.html',
      model: 'SA-006'
    },
    {
      title: 'Verification of Brewster’s Law',
      link: './products-page/plus3-physics-equipment/brewsters-law.html',
      model: 'SK-045'
    },
    {
      title: 'Calibration of Meter Bridge',
      link: './products-page/plus3-physics-equipment/meter-bridge-calibration.html',
      model: 'QMP-002'
    },
    {
      title: 'Determine Viscosity by Searle’s Viscometer',
      link: './products-page/plus3-physics-equipment/searles-viscometer.html',
      model: 'QMP-003'
    },
    // {
    //   title: 'Determination of G Factor by ESR Spectrometer',
    //   link: './products-page/plus3-physics-equipment/g-factor-esr-spectrometer.html',
    //   model: 'QMP-004'
    // }
  ]
},
{
  category: 'emtLab',
  sectionTitle: 'Electromagnetic Theory Lab Equipment',
  viewMoreLink: './products-page/plus3-physics-equipment/',
  products: [
    {
      title: 'Malus Law using Diode Laser',
      link: './products-page/plus3-physics-equipment/malus-law-diode-laser.html',
      model: 'EMT-001'
    },
    {
      title: 'Malus Law',
      link: './products-page/plus3-physics-equipment/malus-law.html',
      model: 'EMT-001'
    },
    {
      title: 'Malus Law using He-Ne Laser',
      link: './products-page/plus3-physics-equipment/malus-law-hene.html',
      model: 'EMT-001A'
    },
    {
      title: 'Polarimeter',
      link: './products-page/plus3-physics-equipment/polarimeter.html',
      model: 'EMT-002'
    },
    {
      title: 'Babinet Compensator',
      link: './products-page/plus3-physics-equipment/babinet-compensator.html',
      model: 'EMT-003'
    },
    {
      title: 'Ultrasonic Apparatus',
      link: './products-page/plus3-physics-equipment/ultrasonic.html',
      model: 'EMT-005'
    },
    {
      title: 'Gaussian Eyepiece',
      link: './products-page/plus3-physics-equipment/gaussian-eyepiece.html',
      model: 'EMT-006'
    },
    {
      title: 'Stefan’s Constant Apparatus',
      link: './products-page/plus3-physics-equipment/stefan-constant.html',
      model: 'EMT-007'
    },
    {
      title: 'Boltzmann Constant Apparatus',
      link: './products-page/plus3-physics-equipment/boltzmann-constant.html',
      model: 'EMT-008'
    }
  ]
},
// Physics of Devices & Instruments Lab Equipment Data
{
  category: 'devicesLab',
  sectionTitle: 'Physics of Devices & Instruments Lab Equipment',
  viewMoreLink: './products-page/plus3-physics-equipment/',
  products: [
    {
      title: 'Bridge Rectifier',
      link: './products-page/plus3-physics-equipment/bridge-rectifier.html',
      model: 'DIL-001'
    },
    {
      title: 'Filter Trainer',
      link: './products-page/plus3-physics-equipment/filter-trainer.html',
      model: 'DIL-002'
    },
    {
      title: 'Clipper & Clamper Circuit',
      link: './products-page/plus3-physics-equipment/clipper-clamper.html',
      model: 'DIL-018'
    }
  ]
},



  
  
  

  
  
    ];

    // Function to load and display all products by default
function loadAllProducts() {
  const container = document.getElementById('product-sections');
  container.innerHTML = '';  // Clear the container

  productData.forEach(section => {
    const sectionHTML = `
<h2 class="mt-5">${section.sectionTitle}</h2>
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 g-lg-2">  <!-- Adjusted grid -->
  ${section.products.slice(0, 4).map(product => `
    <div class="col">
      <div class="card h-100">
        <img src="${product.image}" class="card-img-top" alt="${product.title}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${product.title}</h5>
          ${product.model ? `<p class="card-text"><strong>Model:</strong> ${product.model}</p>` : ''}
          <a href="./products-page/${product.link}" class="btn btn-primary mt-auto">View Specification</a>
        </div>
      </div>
    </div>
  `).join('')}
</div>
<div class="d-flex justify-content-end mt-3">
  <a href="${section.viewMoreLink}" class="btn btn-secondary">View More</a>
</div>
    `;
    container.insertAdjacentHTML('beforeend', sectionHTML);
  });
}

   // Function to filter and show products by category
function filterProducts(category) {
  const container = document.getElementById('product-sections');
  container.innerHTML = '';  // Clear the container

  if (category === 'all') {
    loadAllProducts();  // Show all products
    return;
  }

  productData.forEach(section => {
    if (section.category === category) {
      const sectionHTML = `
        <h2 class="mt-5">${section.sectionTitle}</h2>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          ${section.products.map(product => `
            <div class="col">
              <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title">${product.title}</h5>
                  ${product.model ? `<p class="card-text"><strong>Model:</strong> ${product.model}</p>` : ''}
                  <a href="./products-page/${product.link}" class="btn btn-primary mt-auto">View Specification</a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="d-flex justify-content-end mt-3">
          <a href="${section.viewMoreLink}" class="btn btn-secondary">View More</a>
        </div>
      `;
      container.insertAdjacentHTML('beforeend', sectionHTML);
    }
  });
}

function renderProductsByCategory(category) {
  const container = document.getElementById("product-sections"); // or your correct container ID
  container.innerHTML = ""; // Clear previous content

  const section = productData.find(sec => sec.category === category);
  if (!section) return;

  // Create the section title
  const heading = document.createElement("h2");
  heading.className = "mt-5";
  heading.textContent = section.sectionTitle;
  container.appendChild(heading);

  // Create the row
  const row = document.createElement("div");
  row.className = "row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4";

  // Loop through products and add each one as a column
  section.products.forEach(product => {
    const col = document.createElement("div");
    col.className = "col";

    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${product.image || 'default.jpg'}" class="card-img-top" alt="${product.title}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text"><strong>Model:</strong> ${product.model || 'N/A'}</p>
          <a href="${product.link}" class="btn btn-primary mt-auto" >View Specification</a>
        </div>
      </div>
    `;

    row.appendChild(col);
  });

  // Append the row and optional "View More" button
  container.appendChild(row);

  const viewMoreDiv = document.createElement("div");
  viewMoreDiv.className = "d-flex justify-content-end mt-3";
  // viewMoreDiv.innerHTML = `<a href="${section.viewMoreLink}" class="btn btn-secondary">View More</a>`;
  container.appendChild(viewMoreDiv);
}


document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('product-search');
  const container = document.getElementById('product-sections');

  function renderProducts(query = '') {
    container.innerHTML = '';
    const searchTerm = query.trim().toLowerCase();

    if (!searchTerm) {
      loadAllProducts();
      return;
    }

    let resultsFound = false;

    productData.forEach(section => {
      const matchedProducts = section.products.filter(product => {
        const title = product.title?.toLowerCase() || '';
        const model = product.model?.toLowerCase() || '';
        return title.includes(searchTerm) || model.includes(searchTerm);
      });

      if (matchedProducts.length > 0) {
        resultsFound = true;

        const sectionHTML = `
          <h2 class="mt-5">${section.sectionTitle}</h2>
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            ${matchedProducts.map(product => `
              <div class="col">
                <div class="card h-100">
                  <img src="${product.image}" class="card-img-top" alt="${product.title}">
                  <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${product.title}</h5>
                    ${product.model ? `<p class="card-text"><strong>Model:</strong> ${product.model}</p>` : ''}
                    <a href="${product.link}" class="btn btn-primary mt-auto">View Specification</a>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        `;
        container.insertAdjacentHTML('beforeend', sectionHTML);
      }
    });

    if (!resultsFound) {
      container.innerHTML = `<div class="text-center mt-5"><h4>No products found for "<strong>${searchTerm}</strong>"</h4></div>`;
    }
  }

  // Listen for real-time input
  searchInput.addEventListener('input', function () {
    renderProducts(this.value);
  });

  // Load all on initial page load
  loadAllProducts();
});


  
    document.addEventListener('DOMContentLoaded', function () {
      // Add event listeners for sidebar items
      document.getElementById('all-products')?.addEventListener('click', () => filterProducts('all'));
      document.getElementById('physics')?.addEventListener('click', () => filterProducts('plustwoPhysics'));
      document.getElementById('chemistry')?.addEventListener('click', () => filterProducts('plustwoChemistry'));
      document.getElementById('mechanics')?.addEventListener('click', () => filterProducts('mechanicsLab'));
      document.getElementById('emLab')?.addEventListener('click', () => filterProducts('emLab'));
      document.getElementById('thermalLab')?.addEventListener('click', () => filterProducts('thermalLab'));
      document.getElementById('waveOpticsLab')?.addEventListener('click', () => filterProducts('waveOpticsLab'));
      document.getElementById('digitalLab')?.addEventListener('click', () => filterProducts('digitalLab'));
      document.getElementById('modernPhysicsLab')?.addEventListener('click', () => filterProducts('modernPhysicsLab'));
      document.getElementById('analogLab')?.addEventListener('click', () => filterProducts('analogLab'));
      document.getElementById('solidStateLab')?.addEventListener('click', () => filterProducts('solidStateLab'));
      document.getElementById('qmLab')?.addEventListener('click', () => filterProducts('qmLab'));
      document.getElementById('emtLab')?.addEventListener('click', () => filterProducts('emtLab'));
      document.getElementById('devicesLab')?.addEventListener('click', () => filterProducts('devicesLab'));
  
      // Load all products initially
      loadAllProducts(); 
  });
  

