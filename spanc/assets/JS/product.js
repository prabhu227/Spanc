
    // Toggle sidebar on small screens
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('show');
      overlay.classList.toggle('show');
    });

    overlay.addEventListener('click', () => {
      sidebar.classList.remove('show');
      overlay.classList.remove('show');
    });

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
    { title: "MECHANICS LAB INdotek ", link: "./products-page/plus3-physics-equipment/mechanics-lab.html" ,model:""},
  { title: "Capillary Rise Apparatus", link: "./products-page/plus3-physics-equipment/capillary-rise-apparatus.html" },
  { title: "Sextant Apparatus", link: "./products-page/plus3-physics-equipment/sextant-apparatus.html" },
  { title: "Fly Wheel Apparatus", link: "./products-page/plus3-physics-equipment/fly-wheel-apparatus.html",model:"SPML-003" },
  { title: "Optical Lever Apparatus", link: "./products-page/plus3-physics-equipment/optical-lever-apparatus.html" ,model:"SPML-004"},
  { title: "Maxwell Needle", link: "./products-page/plus3-physics-equipment/maxwell-needel.html", model:"SPML-005" },
  // { title: "Searle's Method (Basic)", link: "./products-page/plus3-physics-equipment/searle-basic-method.html",model:"SPML-006" },
  { title: "Searle's Method (Elastic Constants)", link: "./products-page/plus3-physics-equipment/searle-digital-method.html",model:"SPML-006" },
  { title: "Searle's Method (Elastic Constants)", link: "./products-page/plus3-physics-equipment/searle-elastic-method.html",model:"SPML-006A" },
  // { title: "Searle's Method A", link: "./products-page/plus3-physics-equipment" },
  { title: "Bar Pendulum (Advance)", link: "./products-page/plus3-physics-equipment/bar-pendulum-advance.html",model:"SPML-007A" },
  { title: "Bar Pendulum (Basic)", link: "./products-page/plus3-physics-equipment/bar-pendulum-basic.html" ,model:"SPML-007B"},
  { title: "Bar Pendulum (Digital Counter)", link: "./products-page/plus3-physics-equipment/bar-pendulum-digital.html" ,model:"SPML-007D"},
  { title: "Kater's Pendulum (Advance)", link: "./products-page/plus3-physics-equipment/kater-pendulum-advance.html",model:"SPML-008A" },
  { title: "Kater's Pendulum (Basic)", link: "./products-page/plus3-physics-equipment/kater-pendulum-basic.html",model:"SPML-008B" },
  { title: "Kater's Pendulum (Digital)", link: "./products-page/plus3-physics-equipment/kater-pendulum-digital.html" ,model:"SPML-008D"},
  { title: "Spring Constant Apparatus", link: "./products-page/plus3-physics-equipment/spring-constant.html" ,model:"SPML-009"},
  { title: "Poiseuille's Method", link: "./products-page/plus3-physics-equipment/poiseille-method.html",model:"SPML-010" },
  { title: "Barton Apparatus (Horizontal)", link: "./products-page/plus3-physics-equipment/bartonapp-horizontal.html",model:"SPML-011H" },
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
    sectionTitle: "Electricity & Magnetism Lab",
    category: "Electricity & Magnetism Lab",
    viewMoreLink: "./products-page/plus3-physics-equipment/",
    products: [
    {
    title: "Ballistic Galvanometer",
    link: "plusthreecheandbio/ballistic-galvanometer.html",
    model: "EML-001",
    image: "./images/electricity/ballistic-galvanometer.jpg"
  },
    ],
     
  },
    ];

    // Function to load and display all products by default
function loadAllProducts() {
  const container = document.getElementById('product-sections');
  container.innerHTML = '';  // Clear the container

  productData.forEach(section => {
    const sectionHTML = `
    // Inside the loadAllProducts() and filterProducts() functions 
<h2 class="mt-5">${section.sectionTitle}</h2>
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 g-lg-2">  <!-- Adjusted grid -->
  ${section.products.map(product => `
    <div class="col">
      <div class="card h-100">
        <img src="${product.image}" class="card-img-top" alt="${product.title}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${product.title}</h5>
          ${product.model ? `<p class="card-text"><strong>Model:</strong> ${product.model}</p>` : ''}
          <a href="./products-page/plus2product/${product.link}" class="btn btn-primary mt-auto">View Specification</a>
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

// function renderProductsByCategory(category) {
//     const container = document.getElementById('product-sections');
//     container.innerHTML = '';

//   productData.forEach(section => {
//     if (section.category === category) {
//       const sectionHTML = `
//         <h2 class="mt-5">${section.sectionTitle}</h2>
//         <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
//           ${section.products.map(product => `
//             <div class="col">
//               <div class="card h-100">
//                 <img src="${product.image}" class="card-img-top" alt="${product.title}">
//                 <div class="card-body d-flex flex-column">
//                   <h5 class="card-title">${product.title}</h5>
//                   ${product.model ? `<p class="card-text"><strong>Model:</strong> ${product.model}</p>` : ''}
//                   <a href="${product.link}" class="btn btn-primary mt-auto">View Specification</a>
//                 </div>
//               </div>
//             </div>
//           `).join('')}
//         </div>
//         <div class="d-flex justify-content-end mt-3">
//           <a href="${section.viewMoreLink}" class="btn btn-secondary">View More</a>
//         </div>
//       `;
//       container.insertAdjacentHTML('beforeend', sectionHTML);
//     }
//   });
// }

    // Add event listeners for sidebar items
    document.getElementById('all-products').addEventListener('click', () => filterProducts('all'));
    document.getElementById('physics').addEventListener('click', () => filterProducts('Physics'));
    document.getElementById('chemistry').addEventListener('click', () => filterProducts('Chemistry'));
    document.getElementById('mechanics').addEventListener('click', () => filterProducts('mechanicsLab'));
    document.getElementById('emLab').addEventListener('click', () => filterProducts('emLab'));


    // Load all products initially when the page loads
    document.addEventListener('DOMContentLoaded', loadAllProducts);

