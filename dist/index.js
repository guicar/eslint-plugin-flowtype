'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineFlowType = require('./rules/defineFlowType');

var _defineFlowType2 = _interopRequireDefault(_defineFlowType);

var _genericSpacing = require('./rules/genericSpacing');

var _genericSpacing2 = _interopRequireDefault(_genericSpacing);

var _requireParameterType = require('./rules/requireParameterType');

var _requireParameterType2 = _interopRequireDefault(_requireParameterType);

var _requireReturnType = require('./rules/requireReturnType');

var _requireReturnType2 = _interopRequireDefault(_requireReturnType);

var _requireValidFileAnnotation = require('./rules/requireValidFileAnnotation');

var _requireValidFileAnnotation2 = _interopRequireDefault(_requireValidFileAnnotation);

var _sortObjectType = require('./rules/sortObjectType');

var _sortObjectType2 = _interopRequireDefault(_sortObjectType);

var _spaceAfterTypeColon = require('./rules/spaceAfterTypeColon');

var _spaceAfterTypeColon2 = _interopRequireDefault(_spaceAfterTypeColon);

var _spaceBeforeGenericBracket = require('./rules/spaceBeforeGenericBracket');

var _spaceBeforeGenericBracket2 = _interopRequireDefault(_spaceBeforeGenericBracket);

var _spaceBeforeTypeColon = require('./rules/spaceBeforeTypeColon');

var _spaceBeforeTypeColon2 = _interopRequireDefault(_spaceBeforeTypeColon);

var _unionIntersectionSpacing = require('./rules/unionIntersectionSpacing');

var _unionIntersectionSpacing2 = _interopRequireDefault(_unionIntersectionSpacing);

var _typeIdMatch = require('./rules/typeIdMatch');

var _typeIdMatch2 = _interopRequireDefault(_typeIdMatch);

var _useFlowType = require('./rules/useFlowType');

var _useFlowType2 = _interopRequireDefault(_useFlowType);

var _validSyntax = require('./rules/validSyntax');

var _validSyntax2 = _interopRequireDefault(_validSyntax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  rules: {
    'define-flow-type': _defineFlowType2.default,
    'generic-spacing': _genericSpacing2.default,
    'require-parameter-type': _requireParameterType2.default,
    'require-return-type': _requireReturnType2.default,
    'require-valid-file-annotation': _requireValidFileAnnotation2.default,
    'sort-object-type': _sortObjectType2.default,
    'space-after-type-colon': _spaceAfterTypeColon2.default,
    'space-before-generic-bracket': _spaceBeforeGenericBracket2.default,
    'space-before-type-colon': _spaceBeforeTypeColon2.default,
    'type-id-match': _typeIdMatch2.default,
    'union-intersection-spacing': _unionIntersectionSpacing2.default,
    'use-flow-type': _useFlowType2.default,
    'valid-syntax': _validSyntax2.default
  },
  rulesConfig: {
    'define-flow-type': 0,
    'generic-spacing': 0,
    'require-parameter-type': 0,
    'require-return-type': 0,
    'sort-object-type': 0,
    'space-after-type-colon': 0,
    'space-before-generic-bracket': 0,
    'space-before-type-colon': 0,
    'type-id-match': 0,
    'union-intersection-spacing': 0,
    'use-flow-type': 0,
    'valid-syntax': 0
  }
};
module.exports = exports['default'];