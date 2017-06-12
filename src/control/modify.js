import Control from './control.js';
import image from '../../img/modify_geometry.png';

export default class ModifyControl extends Control {
  /**
   * Tool for drawing features.
   * @param {Object} options Tool options.
   * @param {string} [type] Geometry type ('Point', 'LineString', 'Polygon',
   *   'MultiPoint', 'MultiLineString', 'MultiPolygon' or 'Circle').
   *   Default is 'Point'.
   * @param {ol.Collection<ol.Feature>} [features] Destination for drawing.
   * @param {ol.source.Vector} [source] Destination for drawing.
   */
  constructor(options) {
    super(
      Object.assign(options, {
        title: 'Modify geometry',
        className: 'icon-modify',
        image: image
      })
    );

    this.selectInteraction = new ol.interaction.Select({
        source: this.source,
        features: this.features
    });

    this.modifyInteraction = new ol.interaction.Modify({
      features: this.selectInteraction.getFeatures()
    });
  }

  /**
   * Activate the control
   */
  activate() {
    this.map.addInteraction(this.selectInteraction);
    this.map.addInteraction(this.modifyInteraction);
    super.activate();
  }

  /**
   * Activate the control
   */
  deactivate() {
    this.map.removeInteraction(this.selectInteraction);
    this.map.removeInteraction(this.modifyInteraction);
    super.deactivate();
  }
}