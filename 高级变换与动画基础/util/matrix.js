class Matrix4 {
  constructor() {
    this.elements = new Float32Array([
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ])
  }

  /**
   * Set the identity matrix
   * @returns this
   */
  setIdentity () {
    this.elements = new Float32Array([
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ])
    
    return this
  }
  
  /**
   * Set the matrix for translation
   * @param {*} x The X value of a translation
   * @param {*} y The Y value of a translation
   * @param {*} z The Z value of a translation
   * @returns this
   */
  setTranslate (x, y, z) {
    this.elements = new Float32Array([
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      x, y, z, 1
    ])
    return this
  }

  /**
   * Set the matrix for rotation
   * @param {*} angle The angle of retation (degrees)
   * @param {*} x  The X coordinate of vector of rotation axis
   * @param {*} y  The Y coordinate of vector of rotation axis
   * @param {*} z  The Z coordinate of vector of rotation axis
   */
  setRotate (angle, x, y, z) {
    const radian = Math.PI / 180 * angle
    const cosB = Math.cos(radian)
    const sinB = Math.sin(radian)
    
    if (0 !== x && 0 === y && 0 === z) {
      if (x < 0) {
        sinB = -sinB
      }
      // Rotation around x axis
      this.elements = new Float32Array([
        1,    0,      0,     0,
        0,    cosB,   sinB,  0,
        0,    -sinB,  cosB,  0,
        0,    0,      0,     1
      ])
    } else if (0 === x && 0 !== y && 0 === z) {
      if (y < 0) {
        sinB = - sinB
      }
      // Rotation around y axis
      this.elements = new Float32Array([
        cosB,   0,   -sinB,   0,
        0,      1,   0,       0,
        sinB,   0,   cosB,    0,
        0,      0,   0,       1
      ])

    } else if (0 === x && 0 === y && 0 !== z) {
      if (z < 0) {
        sinB = - sinB
      }
      // Rotation around z axis
      this.elements = new Float32Array([
        cosB,    sinB,   0,  0,
        -sinB,   cosB,   0,  0,
        0,       0,      1,  0,
        0,       0,      0,  1
      ])

    } else {
      // Rotation around another axis
      // todo
    }
    return this
  }

  /**
   * Set the matrix for scaling
   * @param {*} x the scale factor along the X axis
   * @param {*} y the scale factor along the Y axis
   * @param {*} z the scale factor along the Z axis
   */
  setScale (x, y, z) {
    this.elements = new Float32Array([
      x, 0, 0, 0,
      0, y, 0, 0,
      0, 0, z, 0,
      0, 0, 0, 1 
    ])
  }

  /**
   * Multiply the matrix for translation from the right
   * @param {*} x The X value of a translation
   * @param {*} y The Y value of a translation 
   * @param {*} z The Z value of a translation
   */
  translate (x, y, z) {
    let e = this.elements
    e[12] += e[0] * x + e[4] * y + e[8] * z
    e[13] += e[1] * x + e[5] * y + e[9] * z
    e[14] += e[2] * x + e[6] * y + e[10] * z
    e[15] += e[3] * x + e[7] * y + e[11] * z
    return this
  }

  /**
   *
   * @param {*} angle 
   * @param {*} x 
   * @param {*} y 
   * @param {*} z 
   */
  rotate (angle, x, y, z) { 

  }
  
  /**
   * Multiply the matrix for scaling form the right
   * @param {*} x the scale factor along the X axis
   * @param {*} y the scale factor along the Y axis
   * @param {*} z the scale factor along the Z axis
   */
  scale (x, y, z) {
    let e = this.elements
    e[0] *= x; e[4] *= y; e[8] *= z;
    e[1] *= x; e[5] *= y; e[9] *= z;
    e[2] *= x; e[6] *= y; e[10] *= z;
    e[3] *= x; e[7] *= y; e[11] *= z;
    
    return this
  }

  /**
   * 
   * @param {*} m 
   */
  set (m) {
    
  }
}

export default Matrix4