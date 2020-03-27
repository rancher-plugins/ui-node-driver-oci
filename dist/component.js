"use strict";

define("nodes/components/driver-oci/component", ["exports", "shared/mixins/node-driver"], function (exports, _nodeDriver) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var LAYOUT = "e3sjYWNjb3JkaW9uLWxpc3Qgc2hvd0V4cGFuZEFsbD1mYWxzZSBhcyB8IGFsIGV4cGFuZEZuIHx9fQogIDxkaXYgY2xhc3M9Im92ZXItaHIiPgogICAgPHNwYW4+CiAgICAgIHt7ZHJpdmVyT3B0aW9uc1RpdGxlfX0KICAgIDwvc3Bhbj4KICA8L2Rpdj4KCiAge3sjYWNjb3JkaW9uLWxpc3QtaXRlbQogICAgdGl0bGU9KHQgIm5vZGVEcml2ZXIub2NpLmFjY2Vzcy50aXRsZSIpCiAgICBkZXRhaWw9KHQgIm5vZGVEcml2ZXIub2NpLmFjY2Vzcy5kZXRhaWwiKQogICAgZXhwYW5kQWxsPWV4cGFuZEFsbAogICAgZXhwYW5kPShhY3Rpb24gZXhwYW5kRm4pCiAgICBleHBhbmRPbkluaXQ9dHJ1ZQogIH19CiAgICB7e2Zvcm0tYXV0aC1jbG91ZC1jcmVkZW50aWFsCiAgICAgIGRyaXZlck5hbWU9ZHJpdmVyTmFtZQogICAgICBwYXJzZUFuZENvbGxlY3RFcnJvcnM9KGFjdGlvbiAiZXJyb3JIYW5kbGVyIikKICAgICAgcHJpbWFyeVJlc291cmNlPXByaW1hcnlSZXNvdXJjZQogICAgICBjbG91ZENyZWRlbnRpYWxzPWNsb3VkQ3JlZGVudGlhbHMKICAgICAgZmluaXNoQW5kU2VsZWN0Q2xvdWRDcmVkZW50aWFsPShhY3Rpb24gImZpbmlzaEFuZFNlbGVjdENsb3VkQ3JlZGVudGlhbCIpCiAgICAgIHByb2dyZXNzU3RlcD0oYWN0aW9uICJmaW5pc2hBbmRTZWxlY3RDbG91ZENyZWRlbnRpYWwiKQogICAgICBjYW5jZWw9KGFjdGlvbiAiY2FuY2VsIikKICAgICAgaGlkZVNhdmU9dHJ1ZQogICAgfX0KCiAge3svYWNjb3JkaW9uLWxpc3QtaXRlbX19CgogIHt7I2FjY29yZGlvbi1saXN0LWl0ZW0KICAgICB0aXRsZT0odCAibm9kZURyaXZlci5vY2kucGxhY2VtZW50LnRpdGxlIikKICAgICBkZXRhaWw9KHQgIm5vZGVEcml2ZXIub2NpLnBsYWNlbWVudC5kZXRhaWwiKQogICAgIGV4cGFuZEFsbD1leHBhbmRBbGwKICAgICBleHBhbmQ9KGFjdGlvbiBleHBhbmRGbikKICAgICBleHBhbmRPbkluaXQ9dHJ1ZQogIH19CiAgICA8ZGl2IGNsYXNzPSJyb3ciPgoKICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPnt7dCAnbm9kZURyaXZlci5vY2kucmVnaW9uLmxhYmVsJ319e3tmaWVsZC1yZXF1aXJlZH19PC9sYWJlbD4KICAgICAgICB7eyNpbnB1dC1vci1kaXNwbGF5IHZhbHVlPXNlbGVjdGVkUmVnaW9ufX0KICAgICAgICB7e3NlYXJjaGFibGUtc2VsZWN0IGNsYXNzPSJmb3JtLWNvbnRyb2wiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9cmVnaW9uQ2hvaWNlcwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1tb2RlbC5vY2lDb25maWcucmVnaW9uCiAgICAgICAgICB9fQogICAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgICA8L2Rpdj4KCiAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ25vZGVEcml2ZXIub2NpLmF2YWlsYWJpbGl0eURvbWFpbi5sYWJlbCd9fXt7ZmllbGQtcmVxdWlyZWR9fTwvbGFiZWw+CiAgICAgICAge3sjaW5wdXQtb3ItZGlzcGxheSB2YWx1ZT1zZWxlY3RlZEFkfX0KICAgICAgICB7e3NlYXJjaGFibGUtc2VsZWN0IGNsYXNzPSJmb3JtLWNvbnRyb2wiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9YWRDaG9pY2VzCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPW1vZGVsLm9jaUNvbmZpZy5ub2RlQXZhaWxhYmlsaXR5RG9tYWluCiAgICAgICAgICB9fQogICAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgICA8L2Rpdj4KCiAgICA8L2Rpdj4KCgogIHt7L2FjY29yZGlvbi1saXN0LWl0ZW19fQoKICB7eyNhY2NvcmRpb24tbGlzdC1pdGVtCiAgICB0aXRsZT0odCAibm9kZURyaXZlci5vY2kuaW5zdGFuY2UudGl0bGUiKQogICAgZGV0YWlsPSh0ICJub2RlRHJpdmVyLm9jaS5pbnN0YW5jZS5kZXRhaWwiKQogICAgZXhwYW5kQWxsPWV4cGFuZEFsbAogICAgZXhwYW5kPShhY3Rpb24gZXhwYW5kRm4pCiAgICBleHBhbmRPbkluaXQ9dHJ1ZQogIH19CiAgICA8ZGl2IGNsYXNzPSJyb3ciPgoKICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPgogICAgICAgICAge3t0ICJub2RlRHJpdmVyLm9jaS5ub2RlQ29tcGFydG1lbnQubGFiZWwifX0KICAgICAgICAgIHt7ZmllbGQtcmVxdWlyZWR9fQogICAgICAgIDwvbGFiZWw+CiAgICAgICAge3tpbnB1dAogICAgICAgICAgdHlwZT0idGV4dCIKICAgICAgICAgIHZhbHVlPW1vZGVsLm9jaUNvbmZpZy5ub2RlQ29tcGFydG1lbnRJZAogICAgICAgICAgY2xhc3NOYW1lcz0iZm9ybS1jb250cm9sIgogICAgICAgICAgcGxhY2Vob2xkZXI9KHQgIm5vZGVEcml2ZXIub2NpLm5vZGVDb21wYXJ0bWVudC5wbGFjZWhvbGRlciIpCiAgICAgICAgfX0KICAgICAgPC9kaXY+CgogICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+e3t0ICdub2RlRHJpdmVyLm9jaS5pbWFnZS5sYWJlbCd9fXt7ZmllbGQtcmVxdWlyZWR9fTwvbGFiZWw+CiAgICAgICAge3sjaW5wdXQtb3ItZGlzcGxheSB2YWx1ZT1zZWxlY3RlZEltYWdlfX0KICAgICAgICB7e3NlYXJjaGFibGUtc2VsZWN0IGNsYXNzPSJmb3JtLWNvbnRyb2wiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9aW1hZ2VDaG9pY2VzCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPW1vZGVsLm9jaUNvbmZpZy5ub2RlSW1hZ2UKICAgICAgICAgIH19CiAgICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICAgIDwvZGl2PgogICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+e3t0ICdub2RlRHJpdmVyLm9jaS5zaGFwZS5sYWJlbCd9fXt7ZmllbGQtcmVxdWlyZWR9fTwvbGFiZWw+CiAgICAgICAge3sjaW5wdXQtb3ItZGlzcGxheSB2YWx1ZT1zZWxlY3RlZG5vZGVTaGFwZX19CiAgICAgICAge3tzZWFyY2hhYmxlLXNlbGVjdCBjbGFzcz0iZm9ybS1jb250cm9sIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PW5vZGVTaGFwZUNob2ljZXMKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9bW9kZWwub2NpQ29uZmlnLm5vZGVTaGFwZQogICAgICAgICAgfX0KICAgICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgICAgPC9kaXY+CiAgICA8L2Rpdj4KCgogIHt7L2FjY29yZGlvbi1saXN0LWl0ZW19fQoKICAgIHt7I2FjY29yZGlvbi1saXN0LWl0ZW0KICAgIHRpdGxlPSh0ICJub2RlRHJpdmVyLm9jaS5uZXR3b3JrLnRpdGxlIikKICAgIGRldGFpbD0odCAibm9kZURyaXZlci5vY2kubmV0d29yay5kZXRhaWwiKQogICAgZXhwYW5kQWxsPWV4cGFuZEFsbAogICAgZXhwYW5kPShhY3Rpb24gZXhwYW5kRm4pCiAgICBleHBhbmRPbkluaXQ9dHJ1ZQogIH19CgoKICAgIDxkaXYgY2xhc3M9InJvdyI+CiAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj4KICAgICAgICAgIHt7dCAibm9kZURyaXZlci5vY2kudmNuLmxhYmVsIn19CiAgICAgICAgICB7e2ZpZWxkLXJlcXVpcmVkfX0KICAgICAgICA8L2xhYmVsPgogICAgICAgIHt7aW5wdXQKICAgICAgICAgIHR5cGU9InRleHQiCiAgICAgICAgICB2YWx1ZT1tb2RlbC5vY2lDb25maWcudmNuSWQKICAgICAgICAgIGNsYXNzTmFtZXM9ImZvcm0tY29udHJvbCIKICAgICAgICAgIHBsYWNlaG9sZGVyPSh0ICJub2RlRHJpdmVyLm9jaS52Y24ucGxhY2Vob2xkZXIiKQogICAgICAgIH19CiAgICAgIDwvZGl2PgogICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+CiAgICAgICAgICB7e3QgIm5vZGVEcml2ZXIub2NpLnZjbkNvbXBhcnRtZW50LmxhYmVsIn19CiAgICAgICAgPC9sYWJlbD4KICAgICAgICB7e2lucHV0CiAgICAgICAgICB0eXBlPSJ0ZXh0IgogICAgICAgICAgdmFsdWU9bW9kZWwub2NpQ29uZmlnLnZjbkNvbXBhcnRtZW50SWQKICAgICAgICAgIGNsYXNzTmFtZXM9ImZvcm0tY29udHJvbCIKICAgICAgICAgIHBsYWNlaG9sZGVyPSh0ICJub2RlRHJpdmVyLm9jaS52Y25Db21wYXJ0bWVudC5wbGFjZWhvbGRlciIpCiAgICAgICAgfX0KICAgICAgPC9kaXY+CiAgICA8L2Rpdj4KCiAgICA8ZGl2IGNsYXNzPSJyb3ciPgogICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+CiAgICAgICAgICB7e3QgIm5vZGVEcml2ZXIub2NpLnN1Ym5ldC5sYWJlbCJ9fQogICAgICAgICAge3tmaWVsZC1yZXF1aXJlZH19CiAgICAgICAgPC9sYWJlbD4KICAgICAgICB7e2lucHV0CiAgICAgICAgICB0eXBlPSJ0ZXh0IgogICAgICAgICAgdmFsdWU9bW9kZWwub2NpQ29uZmlnLnN1Ym5ldElkCiAgICAgICAgICBjbGFzc05hbWVzPSJmb3JtLWNvbnRyb2wiCiAgICAgICAgICBwbGFjZWhvbGRlcj0odCAibm9kZURyaXZlci5vY2kuc3VibmV0LnBsYWNlaG9sZGVyIikKICAgICAgICB9fQogICAgICA8L2Rpdj4KCiAgICA8L2Rpdj4KCiAge3svYWNjb3JkaW9uLWxpc3QtaXRlbX19CgoKICA8ZGl2IGNsYXNzPSJvdmVyLWhyIj4KICAgIDxzcGFuPgogICAgICB7e3RlbXBsYXRlT3B0aW9uc1RpdGxlfX0KICAgIDwvc3Bhbj4KICA8L2Rpdj4KCiAge3tmb3JtLW5hbWUtZGVzY3JpcHRpb24KICAgIG1vZGVsPW1vZGVsCiAgICBuYW1lUmVxdWlyZWQ9dHJ1ZQogICAgcm93Q2xhc3M9InJvdyBtYi0xMCIKICB9fQoKICB7e2Zvcm0tdXNlci1sYWJlbHMKICAgIGluaXRpYWxMYWJlbHM9bGFiZWxSZXNvdXJjZS5sYWJlbHMKICAgIHNldExhYmVscz0oYWN0aW9uICJzZXRMYWJlbHMiKQogICAgZXhwYW5kPShhY3Rpb24gZXhwYW5kRm4pCiAgfX0KCiAge3tmb3JtLW5vZGUtdGFpbnRzCiAgICBtb2RlbD1tb2RlbAogICAgZXhwYW5kPShhY3Rpb24gZXhwYW5kRm4pCiAgfX0KCiAge3tmb3JtLWVuZ2luZS1vcHRzCiAgICBtYWNoaW5lPW1vZGVsCiAgICBzaG93RW5naW5lVXJsPXNob3dFbmdpbmVVcmwKICB9fQoKICB7e3RvcC1lcnJvcnMKICAgIGVycm9ycz1lcnJvcnMKICB9fQoKICB7e3NhdmUtY2FuY2VsCiAgICBzYXZlPShhY3Rpb24gInNhdmUiKQogICAgY2FuY2VsPShhY3Rpb24gImNhbmNlbCIpCiAgICBlZGl0aW5nPWVkaXRpbmcKICB9fQp7ey9hY2NvcmRpb24tbGlzdH19Cg==";
  var computed = Ember.computed;
  var get = Ember.get;
  var set = Ember.set;
  var alias = Ember.computed.alias;
  var service = Ember.inject.service;
  var observer = Ember.observer;
  var hash = Ember.RSVP.hash;
  var regionMap = {
    'Sydney': 'ap-sydney-1',
    'Melbourne': 'ap-melbourne-1',
    'Sao Paolo': 'sa-saopaulo-1',
    'Montreal': 'ca-montreal-1',
    'Toronto': 'ca-toronto-1',
    'Frankfurt': 'eu-frankfurt-1',
    'Mumbai': 'ap-mumbai-1',
    'Osaka': 'ap-osaka-1',
    'Tokyo': 'ap-tokyo-1',
    'Amsterdam': 'eu-amsterdam-1',
    'Jeddah': 'me-jeddah-1',
    'Seoul': 'ap-seoul-1',
    'Zurich': 'eu-zurich-1',
    'London': 'uk-london-1',
    'Ashburn': 'us-ashburn-1',
    'Phoenix': 'us-phoenix-1'
  };

  var nodeShapeMap = _defineProperty({
    'VM.Standard1.1': 'VM.Standard1.1',
    'VM.Standard1.2': 'VM.Standard1.2',
    'VM.Standard1.4': 'VM.Standard1.4',
    'VM.Standard1.8': 'VM.Standard1.8',
    'VM.Standard1.16': 'VM.Standard1.16',
    'VM.Standard2.1': 'VM.Standard2.1',
    'VM.Standard2.2': 'VM.Standard2.2',
    'VM.Standard2.4': 'VM.Standard2.4',
    'VM.Standard2.8': 'VM.Standard2.8',
    'VM.Standard2.16': 'VM.Standard2.16',
    'VM.Standard2.24': 'VM.Standard2.24',
    'BM.Standard.E2.64': 'BM.Standard.E2.64',
    'BM.Standard2.52': 'BM.Standard2.52',
    'BM.Standard.B1.44': 'BM.Standard.B1.44',
    'BM.DenseIO2.52': 'BM.DenseIO2.52',
    'BM.HPC2.36': 'BM.HPC2.36',
    'VM.Standard.E2.1.Micro': 'VM.Standard.E2.1.Micro',
    'VM.Standard.E2.2': 'VM.Standard.E2.2',
    'VM.GPU2.1': 'VM.GPU2.1',
    'VM.GPU2.2': 'VM.GPU2.2',
    'VM.GPU3.1': 'VM.GPU3.1',
    'VM.GPU3.2': 'VM.GPU3.2',
    'VM.GPU3.4': 'VM.GPU3.4'
  }, "VM.GPU3.4", 'VM.GPU3.8');

  var imageMap = {
    'Oracle-Linux-7.7': 'Oracle-Linux-7.7'
  };
  exports.default = Ember.Component.extend(_nodeDriver.default, {
    driverName: 'oci',
    step: 1,
    config: alias('model.ociConfig'),
    app: service(),
    intl: service(),
    init: function init() {
      var decodedLayout = window.atob(LAYOUT);
      var template = Ember.HTMLBars.compile(decodedLayout, {
        moduleName: 'nodes/components/driver-oci/template'
      });
      set(this, 'layout', template);

      this._super.apply(this, arguments);
    },
    bootstrap: function bootstrap() {
      var config = get(this, 'globalStore').createRecord({
        type: 'ociConfig',
        region: 'us-phoenix-1',
        nodeImage: 'Oracle-Linux-7.7',
        tags: '',
        rootPass: null
      });
      set(this, 'model.ociConfig', config);
    },
    validate: function validate() {
      this._super();

      var errors = get(this, 'errors') || [];

      if (!get(this, 'model.name')) {
        errors.push('Name is required');
      }

      if (!this.get('model.ociConfig.region')) {
        errors.push('Specifying a oci Region is required');
      }

      if (!this.get('model.ociConfig.nodeImage')) {
        errors.push('Specifying a oci node image is required');
      }

      if (!this.get('model.ociConfig.nodeShape')) {
        errors.push('Specifying a oci node shape is required');
      }

      if (!this.get('model.ociConfig.nodeCompartmentId') || !get(this, 'model.ociConfig.nodeCompartmentId').startsWith('ocid1.compartment')) {
        errors.push('Specifying a valid oci node compartment is required');
      }

      if (!this.get('model.ociConfig.nodeAvailabilityDomain')) {
        errors.push('Specifying a oci node availability domain is required');
      }

      if (!this.get('model.ociConfig.vcnCompartmentId')) {
        set(this, 'model.ociConfig.vcnCompartmentId', get(this, 'model.ociConfig.nodeCompartmentId'));
      }

      if (!this.get('model.ociConfig.vcnId') || !get(this, 'model.ociConfig.vcnId').startsWith('ocid1.vcn')) {
        errors.push('Specifying a valid oci VCN OCID is required');
      }

      if (!this.get('model.ociConfig.subnetId') || !get(this, 'model.ociConfig.subnetId').startsWith('ocid1.subnet')) {
        errors.push('Specifying a valid oci subnet OCID is required');
      }

      if (get(errors, 'length')) {
        set(this, 'errors', errors);
        return false;
      } else {
        set(this, 'errors', null);
        return true;
      }
    },
    actions: {
      finishAndSelectCloudCredential: function finishAndSelectCloudCredential(credential) {
        set(this, 'model.cloudCredentialId', get(credential, 'id'));
      }
    },
    regionChoices: Object.entries(regionMap).map(function (e) {
      return {
        label: e[0],
        value: e[1]
      };
    }),
    selectedRegion: computed('model.ociConfig.region', function () {
      var region = get(this, 'model.ociConfig.region');
      return region;
    }),
    adChoices: computed('model.ociConfig.region', function () {
      var region = get(this, 'model.ociConfig.region');
      var values;

      if (region == "uk-london-1" || region == "us-ashburn-1" || region == "us-phoenix-1" || region == "eu-frankfurt-1") {
        values = {
          "AD1": "jGnV:" + region.toUpperCase().replace('-1', '').replace('US-PHOENIX', 'PHX') + "-AD-1",
          "AD2": "jGnV:" + region.toUpperCase().replace('-1', '').replace('US-PHOENIX', 'PHX') + "-AD-2",
          "AD3": "jGnV:" + region.toUpperCase().replace('-1', '').replace('US-PHOENIX', 'PHX') + "-AD-3"
        };
      } else {
        values = {
          "AD1": "jGnV:" + region.toUpperCase().replace('-1', '').replace('US-PHOENIX', 'PHX') + "-AD-1"
        };
      }

      var keys = Object.keys(values);
      var result = keys.map(function (key) {
        return {
          label: values[key],
          value: values[key]
        };
      });
      return result;
    }),
    selectedAd: computed('model.ociConfig.nodeAvailabilityDomain', function () {
      var ad = get(this, 'model.ociConfig.nodeAvailabilityDomain');
      return ad;
    }),
    nodeShapeChoices: Object.entries(nodeShapeMap).map(function (e) {
      return {
        label: e[1],
        value: e[0]
      };
    }),
    selectednodeShape: computed('model.ociConfig.nodeShape', function () {
      var nodeShape = get(this, 'model.ociConfig.nodeShape');
      return nodeShape && nodeShapeMap[nodeShape];
    }),
    imageChoices: Object.entries(imageMap).map(function (e) {
      return {
        label: e[1],
        value: e[0]
      };
    }),
    selectedImage: computed('model.ociConfig.nodeImage', function () {
      var nodeImage = get(this, 'model.ociConfig.nodeImage');
      return nodeImage && imageMap[nodeImage];
    })
  });
});;
"use strict";

define("ui/components/driver-oci/component", ["exports", "nodes/components/driver-oci/component"], function (exports, _component) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});