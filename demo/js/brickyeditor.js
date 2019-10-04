var BrickyEditor = (function (exports, Selectors$1, HtmlTools, Modal, BaseField$1, Prompt) {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var $dom = (function () {
        function $dom() {
        }
        $dom.el = function (html) {
            var div = document.createElement('div');
            div.innerHTML = html;
            var el = div.firstElementChild;
            div.innerHTML = null;
            return el;
        };
        $dom.ons = function (el, events, listener) {
            var _this = this;
            events.split(' ').forEach(function (ev) {
                _this.on(el, ev, listener);
            });
        };
        $dom.on = function (el, event, listener) {
            if (el.attachEvent)
                return el.attachEvent("on" + event, listener);
            else {
                return el.addEventListener(event, listener, false);
            }
        };
        $dom.offset = function (el) {
            var rect = el.getBoundingClientRect();
            var $body = document.body;
            return {
                top: rect.top + $body.scrollTop,
                left: rect.left + $body.scrollLeft
            };
        };
        $dom.wrap = function (el, toEl) {
            el.parentElement.insertBefore(toEl, el);
            toEl.appendChild(el);
        };
        $dom.unwrap = function (el) {
            if (!el.parentElement)
                return;
            var parentsParent = el.parentElement.parentElement;
            if (parentsParent) {
                parentsParent.replaceChild(el, el.parentElement);
            }
            else {
                el.parentElement.innerHTML = el.innerHTML;
            }
        };
        $dom.hide = function (el) {
            el.style.display = 'none';
        };
        $dom.show = function (el) {
            el.style.display = 'block';
        };
        $dom.isHidden = function (el) {
            var style = window.getComputedStyle(el);
            return (style.display === 'none');
        };
        $dom.toggle = function (el, force) {
            var show = force ? force.valueOf() : this.isHidden(el);
            if (show)
                this.show(el);
            else
                this.hide(el);
        };
        $dom.before = function (el, elToInsert) {
            var _this = this;
            if (elToInsert instanceof HTMLElement) {
                el.parentNode.insertBefore(elToInsert, el);
            }
            else {
                elToInsert.forEach(function ($el) { return _this.before(el, $el); });
            }
        };
        $dom.after = function (el, elToInsert) {
            if (el.nextSibling)
                el.parentNode.insertBefore(elToInsert, el);
            else
                el.parentNode.appendChild(elToInsert);
        };
        $dom.hasClass = function (el, className) {
            if (el.classList)
                el.classList.contains(className);
            else
                new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
        };
        $dom.addClass = function (el, className) {
            if (this.hasClass(el, className))
                return;
            if (el.classList)
                el.classList.add(className);
            else
                el.className += ' ' + className;
        };
        $dom.removeClass = function (el, className) {
            if (el.classList)
                el.classList.remove(className);
            else
                el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        };
        $dom.toggleClass = function (el, className, force) {
            if (force) {
                if (force.valueOf())
                    this.addClass(el, className);
                else
                    this.removeClass(el, className);
                return;
            }
            if (el.classList) {
                el.classList.toggle(className);
            }
            else {
                var classes = el.className.split(' ');
                var existingIndex = -1;
                for (var i = classes.length; i--;) {
                    if (classes[i] === className)
                        existingIndex = i;
                }
                if (existingIndex >= 0)
                    classes.splice(existingIndex, 1);
                else
                    classes.push(className);
                el.className = classes.join(' ');
            }
        };
        $dom.windowScrollTop = function () {
            return window.pageYOffset !== undefined ?
                window.pageYOffset :
                (document.documentElement || document.body.parentNode || document.body).scrollTop;
        };
        $dom.replaceWith = function (from, to) {
            var parent = from.parentElement;
            if (parent)
                parent.replaceChild(to, from);
        };
        $dom.select = function (el, selector, addBack) {
            if (addBack === void 0) { addBack = false; }
            var elements = el.querySelectorAll(selector);
            var result = Array.prototype.slice.call(elements);
            if (addBack && addBack.valueOf() && $dom.matches(el, selector)) {
                result.push(el);
            }
            return result;
        };
        $dom.find = function (selector) {
            return document.querySelector(selector);
        };
        $dom.first = function (el, selector) {
            return el.querySelector(selector);
        };
        $dom.clone = function (el) {
            return el.cloneNode(true);
        };
        $dom.trigger = function (el, ev, data) {
            if (window.CustomEvent) {
                var event = new CustomEvent(ev, { detail: data });
            }
            else {
                var event = document.createEvent('CustomEvent');
                event.initCustomEvent(ev, true, true, data);
            }
            el.dispatchEvent(event);
        };
        $dom.matches = function (el, selector) {
            var matches = el.matches ||
                el['matchesSelector'] ||
                el.msMatchesSelector ||
                el['mozMatchesSelector'] ||
                el.webkitMatchesSelector ||
                el['oMatchesSelector'];
            return matches.call(el, selector);
        };
        $dom.data = function (el, prop) {
            var json = el.dataset[prop];
            var data = null;
            try {
                data = JSON.parse(json);
            }
            catch (e) {
                if (e instanceof SyntaxError) {
                    json = json.replace(/'/g, '"');
                    try {
                        data = JSON.parse(json);
                    }
                    catch (_a) { }
                }
            }
            return data;
        };
        return $dom;
    }());

    var EditorStrings = (function () {
        function EditorStrings() {
        }
        EditorStrings.errorBlocksFileNotFound = function (url) { return "Blocks file not found. Requested file: " + url + "."; };
        EditorStrings.errorTemplatesFileNotFound = function (url) { return "Templates file not found. Requested file: " + url + "."; };
        EditorStrings.errorBlockTemplateNotFound = function (templateName) { return "Template \"" + templateName + "\" not found."; };
        EditorStrings.errorTemplateParsing = function (name) { return "Template parsing error: " + name + "."; };
        EditorStrings.embedFieldLinkTitle = 'Link to embed media';
        EditorStrings.embedFieldLinkPlaceholder = 'Link to instagram, youtube and etc.';
        EditorStrings.imageFieldLinkTitle = 'Image link';
        EditorStrings.imageFieldLinkPlaceholder = 'http://url-to-image.png';
        EditorStrings.imageFieldUploadTitle = 'or Upload a file';
        EditorStrings.imageFieldUploadButton = 'Select file';
        EditorStrings.imageFieldAltTitle = 'Alt';
        EditorStrings.imageFieldAltPlaceholder = 'Image \'alt\' attribute value';
        EditorStrings.imageFieldUrlSubtitle = 'Link to open on image click';
        EditorStrings.htmlEditorLinkUrlTitle = 'Url';
        EditorStrings.htmlEditorLinkUrlPlaceholder = 'http://put-your-link.here';
        EditorStrings.htmlEditorLinkTitleTitle = 'Title';
        EditorStrings.htmlEditorLinkTitlePlaceholder = 'Title attribute for link';
        EditorStrings.htmlEditorLinkTargetTitle = 'Target';
        EditorStrings.htmlEditorLinkTargetBlank = 'Blank';
        EditorStrings.htmlEditorLinkTargetSelf = 'Self';
        EditorStrings.htmlEditorLinkTargetParent = 'Parent';
        EditorStrings.htmlEditorLinkTargetTop = 'Top';
        EditorStrings.buttonClose = 'close';
        EditorStrings.buttonOk = 'Ok';
        EditorStrings.buttonCancel = 'Cancel';
        EditorStrings.defaultTemplatesGroupName = 'Other templates';
        return EditorStrings;
    }());

    var UI = (function () {
        function UI(editor) {
            this.editor = editor;
            this.editor = editor;
            this.setTools();
            this.setModal();
            this.htmlTools = new HtmlTools.HtmlTools(this.editor);
        }
        Object.defineProperty(UI.prototype, "isCompactTools", {
            get: function () {
                var compactTools = this.editor.options.compactTools;
                if (compactTools == null) {
                    return window.innerWidth < this.editor.options.compactToolsWidth;
                }
                else {
                    return compactTools.valueOf();
                }
            },
            enumerable: true,
            configurable: true
        });
        UI.prototype.setTools = function () {
            var _this = this;
            this.$tools = $dom.el('<div class="bre bre-tools" data-bricky-tools></div>');
            this.$toolsTemplates = $dom.el('<div class="bre-tools-templates"></div>');
            this.$toolsLoader = $dom.el('<div class="bre-tools-loader"><b>Loading...</b></div>');
            this.$toolsHideBtn = $dom.el('<button type="button" class="bre-tools-toggle"><div>►</div></button>');
            this.$tools.appendChild(this.$toolsHideBtn);
            this.$tools.appendChild(this.$toolsLoader);
            this.$tools.appendChild(this.$toolsTemplates);
            this.$toolsHideBtn.onclick = function (ev) { return _this.toggleTools(); };
            this.editor.$editor.appendChild(this.$tools);
            if (this.isCompactTools) {
                $dom.addClass(this.$tools, 'bre-tools-templates-compact');
                this.toggleTools();
            }
        };
        UI.prototype.toggleTools = function () {
            $dom.toggleClass(this.$tools, 'bre-tools-collapsed', !$dom.hasClass(this.$toolsHideBtn, 'bre-tools-toggle-collapsed'));
            $dom.toggleClass(this.$toolsHideBtn, 'bre-tools-toggle-collapsed');
        };
        UI.prototype.setModal = function () {
            var $modal = $dom.el('<div class="bre bre-modal"><div class="bre-modal-placeholder"></div></div>');
            var $modalCloseBtn = $dom.el("<div class=\"bre-modal-close\"><a href=\"#\">" + EditorStrings.buttonClose + " \u2716</a></div>");
            var $modalContent = $dom.el('<div class="bre-modal-content"></div>');
            var $modalForm = $dom.el('<form></form>');
            var $modalBtns = $dom.el('<div class="bre-btns"></div>');
            var $modalOk = $dom.el("<button type=\"button\" class=\"bre-btn bre-btn-primary\">" + EditorStrings.buttonOk + "</button>");
            var $modalCancel = $dom.el("<button type=\"button\" class=\"bre-btn\">" + EditorStrings.buttonCancel + "</button>");
            $modalBtns.appendChild($modalOk);
            $modalBtns.appendChild($modalCancel);
            $modalForm.appendChild($modalBtns);
            $modalContent.appendChild($modalForm);
            var $placeholder = $dom.first($modal, '.bre-modal-placeholder');
            $placeholder.appendChild($modalCloseBtn);
            $placeholder.appendChild($modalContent);
            this.modal = new Modal.Modal($modal, $modalCloseBtn, $modalForm, $modalBtns, $modalOk, $modalCancel);
            this.editor.$editor.appendChild($modal);
        };
        UI.prototype.toggleToolsLoader = function (toggle) {
            $dom.toggle(this.$toolsLoader, toggle);
        };
        UI.prototype.setTemplates = function (templateGroups) {
            var _this = this;
            var editor = this.editor;
            templateGroups.forEach(function (group) {
                if (group.templates.length === 0)
                    return;
                var $header = $dom.el("<div class='" + Selectors$1.Selectors.classTemplateGroup + "'>" + group.name + "</div>");
                _this.$toolsTemplates.appendChild($header);
                var $group = $dom.el('<div></div>');
                group.templates.forEach(function (template) {
                    var $preview = template.getPreview();
                    $preview.setAttribute('title', template.name);
                    $preview.onclick = function (ev) {
                        editor.addBlock(template);
                        ev.stopPropagation();
                        return false;
                    };
                    $group.appendChild($preview);
                });
                $dom.on($header, 'click', function () {
                    $dom.toggle($group);
                });
                _this.$toolsTemplates.appendChild($group);
            });
        };
        UI.initBtnDeck = function ($btnsDeck) {
            var $btns = $dom.select($btnsDeck, '.bre-btn');
            var $firstBtn = $btns[0];
            $dom.on($firstBtn, 'click', function (ev) {
                UI.toggleBtnDeck($btnsDeck);
                ev.stopPropagation();
                return false;
            });
        };
        UI.toggleBtnDeck = function ($btnsDeck, isOn) {
            var $btns = $dom.select($btnsDeck, '.bre-btn');
            if (!$btns || $btns.length == 0)
                return;
            var $firstBtn = $btns[0];
            var size = 32;
            var gap = size / 6;
            isOn = isOn || $btnsDeck.dataset['isOn'] || false;
            if (isOn) {
                $btnsDeck.style.height = '0';
                $btnsDeck.style.width = '0';
                $btns.forEach(function ($btn, idx) {
                    if (idx === 0)
                        return;
                    $btn.style.opacity = '0';
                    $btn.style.top = '0';
                    $btn.style.left = '0';
                });
            }
            else {
                $btns.forEach(function ($btn, idx) {
                    if (idx === 0)
                        return;
                    $btn.style.opacity = '1';
                    $btn.style.left = (idx + 1) * (size + gap) + "px";
                });
                $btnsDeck.style.height = size + "px";
                $btnsDeck.style.width = (size + gap) * $btns.length - gap + "px";
            }
            $dom.toggleClass($firstBtn, 'bre-btn-active', !isOn);
            $btnsDeck.dataset['isOn'] = String(!isOn);
        };
        return UI;
    }());

    var BlockUI = (function () {
        function BlockUI($block, preview, actions, onSelect) {
            this.$block = $block;
            this.onSelect = onSelect;
            if (!preview) {
                this.buildEditorUI(actions);
            }
        }
        BlockUI.prototype.delete = function () {
            this.$editor.remove();
        };
        BlockUI.prototype.toggleSelection = function (isOn) {
            this.$editor.classList.toggle("bre-selected", isOn);
        };
        BlockUI.prototype.buildEditorUI = function (actions) {
            var _this = this;
            this.$tools = $dom.el('<div class="bre-block-tools bre-btn-deck"></div>');
            actions.forEach(function (action) {
                var $btn = _this.buildButton(action);
                _this.$tools.appendChild($btn);
            });
            UI.initBtnDeck(this.$tools);
            this.$editor = $dom.el('<div class="bre-block-wrapper"></div>');
            this.$editor.appendChild(this.$tools);
            this.$editor.appendChild(this.$block);
            $dom.on(this.$editor, "mouseover", function () {
                _this.$editor.classList.add("bre-active");
            });
            $dom.on(this.$editor, "mouseout", function () {
                _this.$editor.classList.remove("bre-active");
            });
            $dom.on(this.$editor, "click", function () {
                _this.onSelect();
            });
        };
        BlockUI.prototype.buildButton = function (action) {
            var $el = $dom.el("<button type=\"button\" class=\"bre-btn\"><i class=\"fa fa-" + action.icon + "\"></i></button>");
            if (action.action) {
                $el.onclick = function (ev) {
                    action.action();
                    ev.stopPropagation();
                    return false;
                };
            }
            return $el;
        };
        return BlockUI;
    }());

    var BlockUIAction = (function () {
        function BlockUIAction(icon, action, title) {
            this.icon = icon;
            this.action = action;
            this.title = title;
        }
        return BlockUIAction;
    }());

    var str = {
        totalTrim: function (s) {
            return s !== undefined ? s.replace(/\s\s+/g, " ").trim() : "";
        },
        equalsInvariant: function (s1, s2) {
            return s1.toLowerCase() === s2.toLowerCase();
        }
    };
    var Common = (function () {
        function Common() {
        }
        Common.extend = function (out) {
            var extensions = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                extensions[_i - 1] = arguments[_i];
            }
            out = out || {};
            for (var i = 1; i < extensions.length; i++) {
                if (!extensions[i]) {
                    continue;
                }
                for (var key in extensions[i]) {
                    if (extensions[i].hasOwnProperty(key)) {
                        out[key] = extensions[i][key];
                    }
                }
            }
            return out;
        };
        Common.getSelectedText = function () {
            var text = "";
            var doc = document;
            if (window.getSelection) {
                text = window.getSelection().toString();
            }
            else if (doc.selection && doc.selection.type !== "Control") {
                text = doc.selection.createRange().text;
            }
            return text;
        };
        Common.propsEach = function (obj, func) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    var value = obj[key];
                    func(key, value);
                }
            }
        };
        Common.propsFilterKeys = function (obj, filter, payload) {
            var result = [];
            Common.propsEach(obj, function (key, value) {
                if (filter(key, value)) {
                    result.push(key);
                }
            });
            if (payload) {
                result.push(payload);
            }
            return result;
        };
        return Common;
    }());

    var Selectors = (function () {
        function Selectors() {
        }
        Selectors.attr = function (attr) {
            return "[" + attr + "]";
        };
        Selectors.attrContentEditable = 'contenteditable';
        Selectors.selectorContentEditable = 'contenteditable';
        Selectors.attrField = 'data-bre-field';
        Selectors.selectorField = "[" + Selectors.attrField + "]";
        Selectors.classEditor = 'bre-editor';
        Selectors.classTemplate = 'bre-template';
        Selectors.selectorTemplate = "." + Selectors.classTemplate;
        Selectors.classTemplateGroup = 'bre-template-group';
        Selectors.selectorTemplateGroup = "." + Selectors.classTemplateGroup;
        Selectors.selectorTemplatePreview = '.bre-template-preview';
        Selectors.classMobile = 'brickyeditor-tools-mobile';
        Selectors.htmlToolsCommand = 'data-bre-doc-command';
        Selectors.htmlToolsCommandRange = 'data-bre-doc-command-range';
        Selectors.selectorFieldSelected = 'bre-field-selected';
        Selectors.selectorFieldContainer = 'bre-field-container';
        Selectors.selectorHtmlToolsCommand = Selectors.attr(Selectors.htmlToolsCommand);
        Selectors.selectorHtmlToolsCommandRange = Selectors.attr(Selectors.htmlToolsCommandRange);
        return Selectors;
    }());

    var BaseField = (function () {
        function BaseField($field, data, onSelect, onUpdate, onUpload) {
            this.$field = $field;
            this.data = data;
            this.onSelect = onSelect;
            this.onUpdate = onUpdate;
            this.onUpload = onUpload;
            this.bind();
        }
        Object.defineProperty(BaseField, "type", {
            get: function () {
                var name = this.name;
                name = name.replace("Field", "");
                name = name.substring(0, 1).toLowerCase() + name.substring(1);
                return name;
            },
            enumerable: true,
            configurable: true
        });
        BaseField.registerCommonFields = function () {
            if (!this.commonFieldsRegistered) {
                HtmlField.registerField();
                ImageField.registerField();
                EmbedField.registerField();
                ContainerField.registerField();
            }
            this.commonFieldsRegistered = true;
        };
        BaseField.createField = function ($field, data, onSelect, onUpdate, onUpload) {
            var fieldData = $dom.data($field, "breField");
            if (!fieldData || !fieldData.name) {
                throw new Error("There is no data or data doesn't contains 'name' in field " + $field.innerHTML);
            }
            if (data) {
                var addFieldData = {};
                for (var idx = 0; idx < data.length; idx++) {
                    var field = data[idx];
                    if (field.name.toLowerCase() === fieldData.name.toLowerCase()) {
                        addFieldData = field;
                        break;
                    }
                }
                if (addFieldData) {
                    fieldData = Common.extend(fieldData, addFieldData);
                }
            }
            var type = fieldData.type;
            if (type != null) {
                if (!BaseField.commonFieldsRegistered) {
                    BaseField.registerCommonFields();
                }
                if (this._fields.hasOwnProperty(type)) {
                    var field = this._fields[type];
                    return new field($field, fieldData, onSelect, onUpdate, onUpload);
                }
                else {
                    throw new Error(type + " field not found");
                }
            }
            else {
                throw new Error("Field type not defined in data-bre-field attribute");
            }
        };
        BaseField.registerField = function () {
            if (this._fields.hasOwnProperty(this.type)) {
                delete this._fields[this.type];
            }
            this._fields[this.type] = this;
        };
        BaseField.prototype.deselect = function () {
            this.$field.classList.remove(Selectors.selectorFieldSelected);
        };
        BaseField.prototype.getEl = function () {
            var $el = this.$field.cloneNode(true);
            $el.attributes.removeNamedItem(Selectors.attrField);
            return $el;
        };
        BaseField.prototype.getSettingsEl = function () {
            return null;
        };
        BaseField.prototype.bind = function () {
        };
        BaseField.prototype.select = function () {
            this.$field.classList.add(Selectors.selectorFieldSelected);
            this.onSelect(this);
        };
        BaseField.prototype.updateProperty = function (prop, value, fireUpdate) {
            if (fireUpdate === void 0) { fireUpdate = true; }
            var oldValue = this.data[prop];
            if (oldValue === value) {
                return;
            }
            this.data[prop] = value;
            if (fireUpdate) {
                this.onUpdate(prop, oldValue, value);
            }
        };
        BaseField.commonFieldsRegistered = false;
        BaseField._fields = {};
        return BaseField;
    }());

    var ContainerField = (function (_super) {
        __extends(ContainerField, _super);
        function ContainerField() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ContainerField.prototype.bind = function () {
            var _this = this;
            var field = this;
            var $field = this.$field;
            this.container = new BlocksContainer($field, function (block) {
                field.updateBlocks();
            }, function (block) {
                field.updateBlocks();
            }, function (block) {
                _this.select();
            }, function (block) {
            }, function (block) {
                field.updateBlocks();
            }, function (block) {
                field.updateBlocks();
            }, field.onUpload, true);
            $dom.addClass($field, Selectors.selectorFieldContainer);
            $dom.on($field, "click", function (ev) {
                field.select();
                ev.stopPropagation();
                return false;
            });
        };
        ContainerField.prototype.updateBlocks = function () {
            this.updateProperty("blocks", this.container.getData(true), true);
            this.updateProperty("html", this.container.getHtml(), true);
        };
        ContainerField.prototype.deselect = function () {
            this.container.blocks.forEach(function (b) { return b.deselect(); });
            this.$field.classList.remove(Selectors.selectorFieldSelected);
        };
        ContainerField.prototype.getEl = function () {
            var html = this.container.getHtml();
            return $dom.el(html);
        };
        return ContainerField;
    }(BaseField));

    var $ajax = (function () {
        function $ajax() {
        }
        $ajax.get = function (url) {
            return new Promise(function (resolve, reject) {
                var request = new XMLHttpRequest();
                request.open('GET', url, true);
                request.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        if (this.status >= 200 && this.status < 400) {
                            var data = null;
                            try {
                                data = JSON.parse(this.responseText);
                            }
                            catch (_a) {
                                data = this.responseText;
                            }
                            try {
                                resolve(data);
                            }
                            catch (ex) {
                                reject(ex);
                            }
                        }
                        else {
                            reject();
                        }
                    }
                };
                request.send();
                request = null;
            });
        };
        $ajax.getScript = function (url) {
            return new Promise(function (resolve, reject) {
                var script = document.createElement("script");
                var done = false;
                var loaded = function () {
                    if (!done && (!this.readyState ||
                        this.readyState == "loaded" || this.readyState == "complete")) {
                        done = true;
                        resolve();
                    }
                    else {
                        reject();
                    }
                };
                script.onload = loaded;
                script.onreadystatechange = loaded;
                script.src = url;
                var head = document.getElementsByTagName("head")[0];
                head.appendChild(script);
            });
        };
        $ajax.jsonp = function (url) {
            return new Promise(function (resolve, reject) {
                var id = '_' + Math.round(10000 * Math.random());
                var callbackName = 'jsonp_callback_' + id;
                window[callbackName] = function (data) {
                    delete window[callbackName];
                    var ele = document.getElementById(id);
                    ele.parentNode.removeChild(ele);
                    resolve(data);
                };
                var src = url + '&callback=' + callbackName;
                var script = document.createElement('script');
                script.src = src;
                script.id = id;
                script.addEventListener('error', reject);
                (document.getElementsByTagName('head')[0] || document.body || document.documentElement).appendChild(script);
            });
        };
        return $ajax;
    }());

    var EditorOptions = (function () {
        function EditorOptions(options) {
            this.templatesUrl = "templates/bootstrap4.html";
            this.compactTools = null;
            this.compactToolsWidth = 768;
            this.ignoreHtml = null;
            this.htmlToolsButtons = null;
            this.onError = function (data) {
                console.log(data.message);
            };
            this.templatesUrl = options.templatesUrl || this.templatesUrl;
            this.onLoad = options.onLoad || options.onload;
            this.onChange = options.onChange;
            this.onBlockAdd = options.onBlockAdd;
            this.onBlockDelete = options.onBlockDelete;
            this.onBlockMove = options.onBlockMove;
            this.onBlockSelect = options.onBlockSelect;
            this.onBlockDeselect = options.onBlockDeselect;
            this.onBlockUpdate = options.onBlockUpdate;
            this.onError = options.onError || this.onError;
            this.onUpload = options.onUpload || null;
            this.blocksUrl = options.blocksUrl || null;
            this.blocks = options.blocks || null;
            this.compactTools = options.compactTools;
            this.ignoreHtml = options.ignoreHtml || false;
            this.htmlToolsButtons = options.htmlToolsButtons || null;
            this.formSelector = options.formSelector || null;
            this.inputSelector = options.inputSelector || null;
        }
        return EditorOptions;
    }());

    var Events = (function () {
        function Events() {
        }
        Events.onLoad = 'onLoad';
        Events.onChange = 'onChange';
        Events.onBlockAdd = 'onBlockAdd';
        Events.onBlockDelete = 'onBlockDelete';
        Events.onBlockMove = 'onBlockMove';
        Events.onBlockSelect = 'onBlockSelect';
        Events.onBlockDeselect = 'onBlockDeselect';
        Events.onBlockUpdate = 'onBlockUpdate';
        return Events;
    }());

    var EmbedService = (function () {
        function EmbedService() {
        }
        EmbedService.getEmbedAsync = function (embedUrl) {
            var _this = this;
            var url = "https://noembed.com/embed?url=" + embedUrl;
            return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                var data, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4, $ajax.jsonp(url)];
                        case 1:
                            data = _a.sent();
                            resolve(data);
                            return [3, 3];
                        case 2:
                            err_1 = _a.sent();
                            reject(err_1);
                            return [3, 3];
                        case 3: return [2];
                    }
                });
            }); });
        };
        EmbedService.processEmbed = function (provider) {
            switch (provider) {
                case EmbedService.Instagram:
                    if (instgrm) {
                        instgrm.Embeds.process();
                    }
                    break;
                default:
                    break;
            }
        };
        EmbedService.Instagram = 'Instagram';
        return EmbedService;
    }());

    var Template = (function () {
        function Template($template) {
            this.loaded = true;
            this.name = $template.dataset.name;
            this.$preview = $dom.first($template, Selectors.selectorTemplatePreview);
            if (this.$preview) {
                $template.removeChild(this.$preview);
            }
            this.$html = $template;
            if (!this.$preview) {
                var block = new Block(this, true);
                var blockHtml = block.getHtml(true);
                if (blockHtml === null) {
                    this.loaded = false;
                }
                else {
                    this.$preview = $dom.el(blockHtml);
                }
            }
        }
        Template.prototype.getPreview = function () {
            var $template = $dom.el("<div class='" + Selectors.classTemplate + "'></div>");
            $template.appendChild(this.$preview);
            return $template;
        };
        return Template;
    }());

    var TemplateGroup = (function () {
        function TemplateGroup(name, templates) {
            this.name = name;
            this.templates = templates;
        }
        return TemplateGroup;
    }());

    var TemplateService = (function () {
        function TemplateService() {
        }
        TemplateService.loadTemplatesAsync = function (url, $editor, onError) {
            return __awaiter(this, void 0, Promise, function () {
                var templates;
                var _this = this;
                return __generator(this, function (_a) {
                    this.templates = [];
                    templates = this.templates;
                    return [2, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                            var data, $data, $style, $groups, templates_1, defaultGroupName, group, err_1;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4, $ajax.get(url)];
                                    case 1:
                                        data = _a.sent();
                                        $data = $dom.el("<div>" + data + "</div>");
                                        $style = $dom.select($data, "style", false);
                                        if ($style.length > 0) {
                                            $dom.before($editor, $style);
                                        }
                                        $groups = $dom.select($data, Selectors.selectorTemplateGroup);
                                        $groups.forEach(function ($group) {
                                            var title = $group.getAttribute("title");
                                            var templates = _this.getTemplates($group, onError);
                                            _this.templates.push(new TemplateGroup(title, templates));
                                            $group.remove();
                                        });
                                        templates_1 = this.getTemplates($data, onError);
                                        defaultGroupName = this.templates.length > 0
                                            ? EditorStrings.defaultTemplatesGroupName
                                            : "";
                                        group = new TemplateGroup(defaultGroupName, templates_1);
                                        this.templates.push(group);
                                        resolve(this.templates);
                                        return [3, 3];
                                    case 2:
                                        err_1 = _a.sent();
                                        onError(EditorStrings.errorTemplatesFileNotFound(url));
                                        reject(err_1);
                                        return [3, 3];
                                    case 3: return [2];
                                }
                            });
                        }); })];
                });
            });
        };
        TemplateService.getTemplate = function (templateName) {
            for (var gi = 0; gi < this.templates.length; gi++) {
                var group = this.templates[gi];
                for (var ti = 0; ti < group.templates.length; ti++) {
                    var template = group.templates[ti];
                    if (template.name.breEqualsInvariant(templateName)) {
                        return template;
                    }
                }
            }
            return null;
        };
        TemplateService.getTemplates = function ($el, onError) {
            var templates = [];
            var $templates = $dom.select($el, Selectors.selectorTemplate);
            $templates.forEach(function ($template) {
                var template = new Template($template);
                if (template.loaded) {
                    templates.push(template);
                }
                else {
                    onError(EditorStrings.errorTemplateParsing(template.name));
                }
            });
            return templates;
        };
        return TemplateService;
    }());

    var Editor = (function () {
        function Editor($editor, options) {
            var _this = this;
            this.onError = function (message, code) {
                if (code === void 0) { code = 0; }
                return _this.options.onError({ message: message, code: code });
            };
            BaseField.registerCommonFields();
            this.$editor = $editor;
            this.$editor.classList.add(Selectors.classEditor);
            this.options = new EditorOptions(options);
            this.container = this.createContainer();
            Editor.UI = new UI(this);
            this.tryBindFormSubmit();
        }
        Editor.prototype.initAsync = function () {
            return __awaiter(this, void 0, void 0, function () {
                var editor, templates, blocks;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            editor = this;
                            Editor.UI.toggleToolsLoader(true);
                            return [4, TemplateService.loadTemplatesAsync(editor.options.templatesUrl, editor.$editor, editor.onError)];
                        case 1:
                            templates = _a.sent();
                            Editor.UI.toggleToolsLoader(false);
                            Editor.UI.setTemplates(templates);
                            return [4, this.tryLoadInitialBlocksAsync()];
                        case 2:
                            blocks = _a.sent();
                            this.loadBlocks(blocks);
                            this.isLoaded = true;
                            this.trigger(Events.onLoad, this);
                            return [2];
                    }
                });
            });
        };
        Editor.prototype.tryBindFormSubmit = function () {
            var editor = this;
            var $form = this.options.formSelector
                ? $dom.find(this.options.formSelector)
                : null;
            var $input = this.options.inputSelector
                ? $dom.find(this.options.inputSelector)
                : null;
            if (!$form || !$input || !($input instanceof HTMLInputElement)) {
                return;
            }
            $dom.on($form, "submit", function () {
                $input.value = JSON.stringify(editor.getData());
                return true;
            });
        };
        Editor.prototype.getData = function () {
            return this.container.getData(this.options.ignoreHtml);
        };
        Editor.prototype.getHtml = function () {
            return this.container.getHtml();
        };
        Editor.prototype.loadBlocks = function (blocks) {
            var _this = this;
            if (blocks && blocks.length) {
                blocks.forEach(function (block) {
                    var template = TemplateService.getTemplate(block.template);
                    if (template) {
                        _this.container.addBlock(template, block.fields, null, false);
                    }
                    else {
                        var message = EditorStrings.errorBlockTemplateNotFound(block.template);
                        _this.onError(message);
                    }
                });
            }
        };
        Editor.prototype.addBlock = function (template) {
            var container = this.getContainer(this.container);
            container.addBlock(template, null, null, true);
        };
        Editor.prototype.createContainer = function () {
            var _this = this;
            var onAdd = function (block, idx) {
                if (_this.isLoaded) {
                    _this.trigger(Events.onBlockAdd, { block: block, idx: idx });
                    _this.trigger(Events.onChange, {
                        blocks: _this.getData(),
                        html: _this.getHtml()
                    });
                }
            };
            var onDelete = function (block, idx) {
                _this.trigger(Events.onBlockDelete, { block: block, idx: idx });
                _this.trigger(Events.onChange, {
                    blocks: _this.getData(),
                    html: _this.getHtml()
                });
            };
            var onUpdate = function (block, property, oldValue, newValue) {
                _this.trigger(Events.onBlockUpdate, {
                    block: block,
                    property: property,
                    oldValue: oldValue,
                    newValue: newValue
                });
                _this.trigger(Events.onChange, {
                    blocks: _this.getData(),
                    html: _this.getHtml()
                });
            };
            return new BlocksContainer(this.$editor, onAdd, onDelete, function (block) {
                _this.trigger(Events.onBlockSelect, { block: block });
            }, function (block) {
                _this.trigger(Events.onBlockDeselect, { block: block });
            }, function (block, from, to) {
                _this.trigger(Events.onBlockMove, { block: block, from: from, to: to });
                _this.trigger(Events.onChange, {
                    blocks: _this.getData(),
                    html: _this.getHtml()
                });
            }, onUpdate, this.options.onUpload);
        };
        Editor.prototype.tryLoadInitialBlocksAsync = function () {
            return __awaiter(this, void 0, Promise, function () {
                var url, editor;
                var _this = this;
                return __generator(this, function (_a) {
                    url = this.options.blocksUrl;
                    editor = this;
                    return [2, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                            var blocks, error_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!url) return [3, 5];
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 3, , 4]);
                                        return [4, $ajax.get(url)];
                                    case 2:
                                        blocks = _a.sent();
                                        resolve(blocks);
                                        return [3, 4];
                                    case 3:
                                        error_1 = _a.sent();
                                        editor.onError(EditorStrings.errorBlocksFileNotFound(url));
                                        reject(error_1);
                                        return [3, 4];
                                    case 4: return [3, 6];
                                    case 5:
                                        if (this.options.blocks) {
                                            resolve(this.options.blocks);
                                        }
                                        else {
                                            resolve(null);
                                        }
                                        _a.label = 6;
                                    case 6: return [2];
                                }
                            });
                        }); })];
                });
            });
        };
        Editor.prototype.getContainer = function (container) {
            if (container.selectedBlock && container.selectedBlock.isContainer()) {
                var field = container.selectedBlock.selectedField;
                if (field) {
                    return this.getContainer(field.container);
                }
            }
            return container;
        };
        Editor.prototype.trigger = function (event, data) {
            var editor = this;
            $dom.trigger(this.$editor, "bre." + event, data);
            Common.propsEach(editor.options, function (key, value) {
                if (str.equalsInvariant(key, event) && value) {
                    value(data);
                }
            });
        };
        return Editor;
    }());

    var PromptParameter = (function () {
        function PromptParameter(key, title, value, placeholder) {
            this.key = key;
            this.title = title;
            this.placeholder = placeholder || "";
            this.value = value;
        }
        PromptParameter.prototype.parseValue = function () {
            if (this.$input) {
                this.value = this.$input.value;
            }
            this.$control = null;
            delete this._$control;
        };
        Object.defineProperty(PromptParameter.prototype, "$control", {
            get: function () {
                if (!this._$control) {
                    this._$control = $dom.el("<div class=" + (this.key ? "bre-prompt-field" : "bre-prompt-subtitle") + ">\n                            <label class=\"bre-label\" for=\"" + this.key + "\">" + (this.title ? this.title : "Select file...") + "</label>\n                        </div>");
                    this.$input = this.key ? this.getEditor() : null;
                    if (this.$input != null) {
                        this._$control.appendChild(this.$input);
                    }
                }
                return this._$control;
            },
            set: function (value) {
                this._$control = value;
            },
            enumerable: true,
            configurable: true
        });
        PromptParameter.prototype.getEditor = function () {
            var $input = document.createElement("input");
            $input.id = this.key;
            $input.className = "bre-input";
            $input.setAttribute("type", "text");
            $input.setAttribute("placeholder", this.placeholder);
            $input.value = this.value || "";
            return $input;
        };
        return PromptParameter;
    }());

    var PromptParameterImage = (function (_super) {
        __extends(PromptParameterImage, _super);
        function PromptParameterImage(key, title, value, placeholder) {
            var _this = _super.call(this, key, title, value, placeholder) || this;
            if (value) {
                _this._value = value;
            }
            return _this;
        }
        PromptParameterImage.prototype.parseValue = function () {
            this.value = this._value;
            this.$control = null;
            delete this._$control;
            this._value = null;
            delete this._value;
        };
        PromptParameterImage.prototype.getEditor = function () {
            var field = this;
            var img = this.value && this.value.fileContent ? this.value.fileContent : "";
            var $editor = $dom.el("\n                <div class='bre-image-input'>\n                    <label for=\"" + this.key + "\">\n                        " + this.placeholder + "\n                    </label>                        \n                    <img src=\"" + img + "\"/>                    \n                    <input type=\"file\" id=\"" + this.key + "\" class=\"bre-input\" placeholder=\"" + this.placeholder + "\">\n                </div>\n                <small class='bre-image-input-filename'></small>");
            var $file = $editor.querySelector('input');
            var $filePreview = $editor.querySelector('img');
            var $fileName = $editor.querySelector('.bre-image-input-filename');
            var value = this.value;
            field.updatePreview($filePreview, $fileName, this.value);
            $file.onchange = function () {
                if ($file.files && $file.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function (ev) {
                        var target = ev.target;
                        field._value = new Prompt.PromptParameterImageResult();
                        field._value.fileContent = target.result;
                        field._value.fileInfo = new Prompt.PromptParameterImageResultFile($file.files[0]);
                        field.updatePreview($filePreview, $fileName, field._value);
                    };
                    reader.readAsDataURL($file.files[0]);
                }
            };
            return $editor;
        };
        PromptParameterImage.prototype.updatePreview = function ($filePreview, $fileName, value) {
            if (!value)
                return;
            $filePreview.src = value.fileContent;
            $filePreview.classList.add('bre-loaded');
            $fileName.innerText = value.fileInfo.name;
        };
        return PromptParameterImage;
    }(Prompt.PromptParameter));

    var PromptParameterOptions = (function (_super) {
        __extends(PromptParameterOptions, _super);
        function PromptParameterOptions(key, title, options, value, placeholder) {
            var _this = _super.call(this, key, title, value, placeholder) || this;
            _this.options = [];
            options.forEach(function (kv) {
                _this.options.push(new Prompt.PromptParameterOption(kv[0], kv[1], kv[1] == value));
            });
            return _this;
        }
        PromptParameterOptions.prototype.getEditor = function () {
            var options = this.options.map(function (opt) {
                return "<option value=\"" + opt.value + "\" " + (opt.selected ? "selected" : "") + ">" + (opt.title ? opt.title : opt.value) + "</option>";
            });
            return $dom.el("<select type=\"text\" id=\"" + this.key + "\" class=\"brickyeditor-input\" placeholder=\"" + this.placeholder + "\">" + options + "</select>");
        };
        return PromptParameterOptions;
    }(Prompt.PromptParameter));

    var EmbedField = (function (_super) {
        __extends(EmbedField, _super);
        function EmbedField() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EmbedField.prototype.getSettingsEl = function () {
            var $el = $dom.el('<div style="position: absolute;width: 100%; height: 100px;;text-align: center;font-weight: bold;vertical-align: middle;background: #333;opacity: 0.2;">Change embed element link</div>');
            $dom.before(this.$field, $el);
            return $el;
        };
        Object.defineProperty(EmbedField.prototype, "settings", {
            get: function () {
                var _this = this;
                return function (field) {
                    _this.showEmbedLoaderAsync(field);
                };
            },
            enumerable: true,
            configurable: true
        });
        EmbedField.prototype.bind = function () {
            var _this = this;
            var field = this;
            var $field = this.$field;
            $dom.on($field, 'click', function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.showEmbedLoaderAsync(field);
                    return [2];
                });
            }); });
            field.loadMedia(false);
        };
        EmbedField.prototype.showEmbedLoaderAsync = function (field) {
            return __awaiter(this, void 0, void 0, function () {
                var fields, url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, Editor.UI.modal.promptAsync(field.getPromptParams())];
                        case 1:
                            fields = _a.sent();
                            if (!(fields != null)) return [3, 3];
                            url = fields.getValue('url');
                            if (!url) return [3, 3];
                            field.setUrl(url);
                            return [4, field.loadMedia(true)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2];
                    }
                });
            });
        };
        EmbedField.prototype.getPromptParams = function () {
            return [
                new PromptParameter('url', EditorStrings.embedFieldLinkTitle, this.data.url || 'http://instagr.am/p/BO9VX2Vj4fF/', EditorStrings.embedFieldLinkPlaceholder)
            ];
        };
        EmbedField.prototype.loadMedia = function (fireUpdate) {
            return __awaiter(this, void 0, void 0, function () {
                var field, json, $embed, $script, scriptSrc;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            field = this;
                            if (!field.data || !field.data.url)
                                return [2];
                            return [4, EmbedService.getEmbedAsync(field.data.url)];
                        case 1:
                            json = _a.sent();
                            field.setEmbed(json, fireUpdate);
                            $embed = $dom.el(json.html);
                            $script = $dom.first($embed, 'script');
                            if ($script) {
                                $script.remove();
                                scriptSrc = $script.src;
                                if (scriptSrc.breStartsWith('//')) {
                                    scriptSrc = "https:" + scriptSrc;
                                    $ajax.getScript(scriptSrc)
                                        .then(function () {
                                        EmbedService.processEmbed(json.provider_name);
                                    });
                                }
                            }
                            field.$field.innerHTML = '';
                            field.$field.removeAttribute('class');
                            field.$field.removeAttribute('style');
                            field.$field.appendChild($embed);
                            field.select();
                            return [2];
                    }
                });
            });
        };
        EmbedField.prototype.setEmbed = function (value, fireUpdate) {
            if (fireUpdate === void 0) { fireUpdate = true; }
            this.updateProperty('embed', value, fireUpdate);
        };
        EmbedField.prototype.setUrl = function (value) {
            this.updateProperty('url', value);
        };
        return EmbedField;
    }(BaseField$1.BaseField));

    var SelectionUtils = (function () {
        function SelectionUtils() {
        }
        SelectionUtils.bindTextSelection = function ($el, handler) {
            var _this = this;
            if (!$dom.matches($el, '[contenteditable]')) {
                return;
            }
            $dom.on($el, 'mouseup', function () {
                setTimeout(function () {
                    var rect = _this.getSelectionRect();
                    handler(rect);
                }, 0);
            });
            $dom.on($el, 'keyup', function (ev) {
                var rect = _this.getSelectionRect();
                handler(rect);
            });
        };
        SelectionUtils.getSelectionRect = function () {
            var selection = window.getSelection();
            var range = selection.getRangeAt(0);
            if (range) {
                var rect = range.getBoundingClientRect();
                if (rect) {
                    return rect;
                }
            }
            return null;
        };
        return SelectionUtils;
    }());

    var HtmlField = (function (_super) {
        __extends(HtmlField, _super);
        function HtmlField() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HtmlField.prototype.bind = function () {
            var _this = this;
            var field = this;
            var $field = this.$field;
            if (!$dom.matches($field, Selectors.selectorContentEditable)) {
                $field.setAttribute(Selectors.attrContentEditable, "true");
            }
            var html = this.data.html || this.$field.innerHTML;
            this.setHtml(html, false);
            $field.innerHTML = this.data.html;
            SelectionUtils.bindTextSelection($field, function (rect) {
                Editor.UI.htmlTools.show(rect);
            });
            $dom.ons($field, "blur keyup paste input", function (ev) {
                _this.setHtml($field.innerHTML);
            });
            $dom.on($field, "paste", function (e) {
                e.preventDefault();
                var ev = e.originalEvent;
                var text = ev.clipboardData.getData("text/plain");
                document.execCommand("insertHTML", false, text);
            });
            $dom.on($field, "click", function (ev) {
                field.select();
                ev.stopPropagation();
                return false;
            });
        };
        HtmlField.prototype.setHtml = function (value, fireUpdate) {
            if (fireUpdate === void 0) { fireUpdate = true; }
            value = value.trim();
            if (this.$field.innerHTML !== value) {
                this.$field.innerHTML = value;
            }
            this.updateProperty("html", value, fireUpdate);
        };
        HtmlField.prototype.getEl = function () {
            var $el = _super.prototype.getEl.call(this);
            $el.removeAttribute(Selectors.attrContentEditable);
            return $el;
        };
        return HtmlField;
    }(BaseField$1.BaseField));

    var HtmlLinkParams = (function () {
        function HtmlLinkParams(href, title, target) {
            if (href === void 0) { href = ""; }
            if (title === void 0) { title = ""; }
            if (target === void 0) { target = ""; }
            this.href = href;
            this.title = title;
            this.target = target;
        }
        HtmlLinkParams.getLinkFromParams = function (fields) {
            var href = fields.getValue("href");
            var title = fields.getValue("title");
            var target = fields.getValue("target");
            return new HtmlLinkParams(href, title, target);
        };
        HtmlLinkParams.prototype.getLinkPromptParams = function () {
            return [
                new PromptParameter("href", EditorStrings.htmlEditorLinkUrlTitle, this.href, EditorStrings.htmlEditorLinkUrlPlaceholder),
                new PromptParameter("title", EditorStrings.htmlEditorLinkTitleTitle, this.title, EditorStrings.htmlEditorLinkTitlePlaceholder),
                new PromptParameterOptions("target", EditorStrings.htmlEditorLinkTargetTitle, [
                    ["", ""],
                    [EditorStrings.htmlEditorLinkTargetBlank, "_blank"],
                    [EditorStrings.htmlEditorLinkTargetSelf, "_self"],
                    [EditorStrings.htmlEditorLinkTargetParent, "_parent"],
                    [EditorStrings.htmlEditorLinkTargetTop, "_top"]
                ], this.target)
            ];
        };
        return HtmlLinkParams;
    }());

    var ImageField = (function (_super) {
        __extends(ImageField, _super);
        function ImageField() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ImageField.prototype.bind = function () {
            var _this = this;
            var field = this;
            var data = this.data;
            this.setSrc(this.data.src, false);
            $dom.on(this.$field, 'click', function () { return __awaiter(_this, void 0, void 0, function () {
                var fields, file, src, alt, link;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, Editor.UI.modal.promptAsync(field.getPromptParams())];
                        case 1:
                            fields = _a.sent();
                            if (fields != null) {
                                file = fields.getValue('file');
                                src = fields.getValue('src');
                                if (file) {
                                    if (field.onUpload) {
                                        field.onUpload(file, function (url) {
                                            field.setSrc(url);
                                            field.setFile(null);
                                        });
                                    }
                                    else {
                                        field.setFile(file);
                                        field.setSrc(null);
                                    }
                                }
                                else if (src) {
                                    field.setSrc(src);
                                    field.setFile(null);
                                }
                                alt = fields.getValue('alt');
                                field.setAlt(alt);
                                link = HtmlLinkParams.getLinkFromParams(fields);
                                this.setLink(link);
                            }
                            field.select();
                            return [2];
                    }
                });
            }); });
        };
        ImageField.prototype.getPromptParams = function () {
            var params = [
                new PromptParameter('src', EditorStrings.imageFieldLinkTitle, this.data.url, EditorStrings.imageFieldLinkPlaceholder),
                new PromptParameterImage('file', EditorStrings.imageFieldUploadTitle, this.data.file, EditorStrings.imageFieldUploadButton),
                new PromptParameter('alt', EditorStrings.imageFieldAltTitle, this.data.alt, EditorStrings.imageFieldAltPlaceholder),
                new PromptParameter(null, EditorStrings.imageFieldUrlSubtitle, null, null),
            ];
            var link = this.data.link ? this.data.link : new HtmlLinkParams();
            var linkParams = link.getLinkPromptParams();
            return params.concat(linkParams);
        };
        ImageField.prototype.setSrc = function (src, fireUpdate) {
            if (fireUpdate === void 0) { fireUpdate = true; }
            if (src) {
                if (this.isImg) {
                    this.$field.setAttribute('src', src);
                }
                else {
                    this.$field.style.backgroundImage = "url(" + src;
                }
            }
            this.updateProperty('src', src, fireUpdate);
        };
        ImageField.prototype.setAlt = function (alt) {
            this.$field.setAttribute(this.isImg ? 'alt' : 'title', alt);
            this.updateProperty('alt', alt);
        };
        ImageField.prototype.setFile = function (file) {
            if (file) {
                if (this.isImg) {
                    this.$field.setAttribute('src', file.fileContent);
                }
                else {
                    this.$field.style.backgroundImage = "url(" + file.fileContent + ")";
                }
            }
            this.updateProperty('file', file);
        };
        ImageField.prototype.setLink = function (url) {
            if (url && url.href) {
                if (!this.$link) {
                    this.$link = $dom.el("<a href='" + url.href + "' title='" + url.title + "' target='" + url.target + "'></a>");
                    $dom.on(this.$link, 'click', function (ev) {
                        ev.stopPropagation();
                        return false;
                    });
                    $dom.wrap(this.$field, this.$link);
                }
                else {
                    this.$link.href = url.href;
                }
            }
            else if (this.$link) {
                $dom.unwrap(this.$field);
                this.$link = null;
                delete this.$link;
            }
            this.updateProperty('link', url);
        };
        Object.defineProperty(ImageField.prototype, "isImg", {
            get: function () {
                return this._isImg = this._isImg || this.$field.tagName.toLowerCase() === 'img';
            },
            enumerable: true,
            configurable: true
        });
        ImageField.prototype.getEl = function () {
            var $el = _super.prototype.getEl.call(this);
            var link = this.data.link;
            if (link && link.href) {
                var $link = $dom.el("<a href='" + link.href + "' title='" + link.title + "' target='" + link.target + "'></a>");
                $link.appendChild($el);
                return $link;
            }
            return $el;
        };
        return ImageField;
    }(BaseField$1.BaseField));

    var Block = (function () {
        function Block(template, preview, data, onDelete, onSelect, onDeselect, onCopy, onMove, onUpdate, onUpload) {
            var _this = this;
            this.template = template;
            this.onDelete = onDelete;
            this.onSelect = onSelect;
            this.onDeselect = onDeselect;
            this.onCopy = onCopy;
            this.onMove = onMove;
            this.onUpdate = onUpdate;
            this.onUpload = onUpload;
            this.fields = [];
            var $block = $dom.el(template.$html.innerHTML);
            this.bindFields($block, data);
            var actions = this.getActions();
            this.ui = new BlockUI($block, preview, actions, function () { return _this.select(); });
        }
        Block.prototype.isContainer = function () {
            if (!this.selectedField) {
                return false;
            }
            return this.selectedField instanceof ContainerField;
        };
        Block.prototype.delete = function () {
            this.ui.delete();
            this.onDelete(this);
        };
        Block.prototype.move = function (offset) {
            this.onMove(this, offset);
        };
        Block.prototype.clone = function () {
            this.onCopy(this);
        };
        Block.prototype.select = function (field) {
            if (field === this.selectedField) {
                return;
            }
            if (field === null) {
                field = this.fields[0];
            }
            if (this.selectedField) {
                this.selectedField.deselect();
            }
            this.selectedField = field;
            this.ui.toggleSelection(true);
            this.onSelect(this);
        };
        Block.prototype.deselect = function () {
            this.selectedField = null;
            this.fields.forEach(function (f) {
                f.deselect();
            });
            this.ui.toggleSelection(false);
            this.onDeselect(this);
        };
        Block.prototype.scrollTo = function () {
            var top = $dom.offset(this.ui.$editor).top - 100;
            top = top > 0 ? top : 0;
        };
        Block.prototype.getData = function (ignoreHtml) {
            var fieldsData = [];
            this.fields.forEach(function (field) {
                fieldsData.push(field.data);
            });
            var data = {
                template: this.template.name,
                fields: fieldsData,
            };
            if (!ignoreHtml) {
                data.html = this.getHtml(true);
            }
            return data;
        };
        Block.prototype.getHtml = function (trim) {
            var $html = $dom.el(this.template.$html.innerHTML);
            var fieldsHtml = {};
            this.fields.forEach(function (field) {
                var name = field.name || field.data.name;
                fieldsHtml[name] = field.getEl();
            });
            $dom.select($html, Selectors.selectorField, true).forEach(function ($elem) {
                var fieldData = $dom.data($elem, "breField");
                var name = fieldData.name;
                var $field = fieldsHtml[name];
                $dom.replaceWith($elem, $field);
            });
            var html = $html.outerHTML;
            if (!html) {
                return null;
            }
            return trim ? str.totalTrim(html) : html;
        };
        Block.prototype.bindFields = function ($block, data) {
            var block = this;
            var $fields = $dom.select($block, Selectors.selectorField, true);
            $fields.forEach(function ($elem) {
                var onUpdate = function (property, oldValue, newValue) {
                    if (block.onUpdate) {
                        block.onUpdate(block, property, oldValue, newValue);
                    }
                };
                var onSelect = block.select;
                var field = BaseField.createField($elem, data, onSelect, onUpdate, block.onUpload);
                block.fields.push(field);
            });
        };
        Block.prototype.getActions = function () {
            var block = this;
            var actions = [
                new BlockUIAction("ellipsis-h"),
                new BlockUIAction("trash-o", function () { return block.delete(); }),
                new BlockUIAction("copy", function () { return block.clone(); }),
                new BlockUIAction("angle-up", function () { return block.move(-1); }),
                new BlockUIAction("angle-down", function () { return block.move(1); }),
            ];
            return actions;
        };
        return Block;
    }());

    var BlocksContainer = (function () {
        function BlocksContainer($element, onAddBlock, onDeleteBlock, onSelectBlock, onDeselectBlock, onMoveBlock, onUpdateBlock, onUpload, usePlaceholder) {
            if (usePlaceholder === void 0) { usePlaceholder = false; }
            this.$element = $element;
            this.onAddBlock = onAddBlock;
            this.onDeleteBlock = onDeleteBlock;
            this.onSelectBlock = onSelectBlock;
            this.onDeselectBlock = onDeselectBlock;
            this.onMoveBlock = onMoveBlock;
            this.onUpdateBlock = onUpdateBlock;
            this.onUpload = onUpload;
            this.usePlaceholder = usePlaceholder;
            this.blocks = [];
            this.isContainer = true;
            this.togglePlaceholderIfNeed();
        }
        BlocksContainer.prototype.getData = function (ignoreHtml) {
            var blocksData = [];
            this.blocks.forEach(function (block) {
                blocksData.push(block.getData(ignoreHtml));
            });
            return blocksData;
        };
        BlocksContainer.prototype.getHtml = function () {
            var blocksHtml = [];
            this.blocks.forEach(function (block) {
                blocksHtml.push(block.getHtml(true));
            });
            var $el = $dom.clone(this.$element);
            $el.innerHTML = blocksHtml.join("\n");
            return $el.outerHTML;
        };
        BlocksContainer.prototype.addBlock = function (template, data, idx, select) {
            var _this = this;
            if (select === void 0) { select = true; }
            var block = new Block(template, false, data, function (block) { return _this.deleteBlock(block); }, function (block) { return _this.selectBlock(block); }, function (block) { return _this.deselectBlock(block); }, function (block) { return _this.copyBlock(block); }, function (block, offset) { return _this.moveBlock(block, offset); }, this.onUpdateBlock, this.onUpload);
            this.insertBlock(block, idx);
            if (select) {
                block.select();
                block.scrollTo();
            }
        };
        BlocksContainer.prototype.insertBlock = function (block, idx) {
            idx = idx || this.blocks.length;
            if (this.selectedBlock) {
                idx = this.blocks.indexOf(this.selectedBlock) + 1;
            }
            this.blocks.splice(idx, 0, block);
            if (idx == 0) {
                this.$element.appendChild(block.ui.$editor);
            }
            else {
                $dom.after(this.blocks[idx - 1].ui.$editor, block.ui.$editor);
            }
            this.onAddBlock(block, idx);
            block.select(null);
            this.togglePlaceholderIfNeed();
        };
        BlocksContainer.prototype.deleteBlock = function (block) {
            var idx = this.blocks.indexOf(block);
            this.blocks.splice(idx, 1);
            block = null;
            if (idx < this.blocks.length) {
                this.blocks[idx].select();
            }
            else if (this.blocks.length > 0) {
                this.blocks[idx - 1].select();
            }
            else {
                this.selectedBlock = null;
            }
            this.onDeleteBlock(block, idx);
            this.togglePlaceholderIfNeed();
        };
        BlocksContainer.prototype.moveBlock = function (block, offset) {
            var idx = this.blocks.indexOf(block);
            var new_idx = idx + offset;
            if (new_idx >= this.blocks.length || new_idx < 0) {
                return;
            }
            var $anchorBlock = this.blocks[new_idx].ui.$editor;
            if (offset > 0) {
                $dom.after($anchorBlock, block.ui.$editor);
            }
            else if (offset < 0) {
                $dom.before($anchorBlock, block.ui.$editor);
            }
            this.blocks.splice(idx, 1);
            this.blocks.splice(new_idx, 0, block);
            this.onMoveBlock(block, idx, new_idx);
            block.scrollTo();
        };
        BlocksContainer.prototype.copyBlock = function (block) {
            var idx = this.blocks.indexOf(block) + 1;
            var copy = this.addBlock(block.template, block.getData().fields, idx, true);
        };
        BlocksContainer.prototype.selectBlock = function (block) {
            if (this.selectedBlock === block) {
                return;
            }
            if (this.selectedBlock) {
                this.selectedBlock.deselect();
            }
            this.selectedBlock = block;
            this.onSelectBlock(block);
        };
        BlocksContainer.prototype.deselectBlock = function (block) {
            this.selectedBlock = null;
            this.onDeselectBlock(block);
        };
        BlocksContainer.prototype.togglePlaceholderIfNeed = function () {
            if (!this.usePlaceholder) {
                return;
            }
            if (this.blocks.length === 0) {
                if (!this.$placeholder) {
                    this.$placeholder = $dom.el('<i data-bre-placeholder="true">Click here to select this container...</i>');
                    this.$element.appendChild(this.$placeholder);
                }
            }
            else if (this.$placeholder) {
                this.$placeholder.remove();
                this.$placeholder = null;
            }
        };
        return BlocksContainer;
    }());

    var Editor$1 = (function () {
        function Editor($editor, options) {
            var _this = this;
            this.onError = function (message, code) {
                if (code === void 0) { code = 0; }
                return _this.options.onError({ message: message, code: code });
            };
            BaseField.registerCommonFields();
            this.$editor = $editor;
            this.$editor.classList.add(Selectors.classEditor);
            this.options = new EditorOptions(options);
            this.container = this.createContainer();
            Editor.UI = new UI(this);
            this.tryBindFormSubmit();
        }
        Editor.prototype.initAsync = function () {
            return __awaiter(this, void 0, void 0, function () {
                var editor, templates, blocks;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            editor = this;
                            Editor.UI.toggleToolsLoader(true);
                            return [4, TemplateService.loadTemplatesAsync(editor.options.templatesUrl, editor.$editor, editor.onError)];
                        case 1:
                            templates = _a.sent();
                            Editor.UI.toggleToolsLoader(false);
                            Editor.UI.setTemplates(templates);
                            return [4, this.tryLoadInitialBlocksAsync()];
                        case 2:
                            blocks = _a.sent();
                            this.loadBlocks(blocks);
                            this.isLoaded = true;
                            this.trigger(Events.onLoad, this);
                            return [2];
                    }
                });
            });
        };
        Editor.prototype.tryBindFormSubmit = function () {
            var editor = this;
            var $form = this.options.formSelector
                ? $dom.find(this.options.formSelector)
                : null;
            var $input = this.options.inputSelector
                ? $dom.find(this.options.inputSelector)
                : null;
            if (!$form || !$input || !($input instanceof HTMLInputElement)) {
                return;
            }
            $dom.on($form, "submit", function () {
                $input.value = JSON.stringify(editor.getData());
                return true;
            });
        };
        Editor.prototype.getData = function () {
            return this.container.getData(this.options.ignoreHtml);
        };
        Editor.prototype.getHtml = function () {
            return this.container.getHtml();
        };
        Editor.prototype.loadBlocks = function (blocks) {
            var _this = this;
            if (blocks && blocks.length) {
                blocks.forEach(function (block) {
                    var template = TemplateService.getTemplate(block.template);
                    if (template) {
                        _this.container.addBlock(template, block.fields, null, false);
                    }
                    else {
                        var message = EditorStrings.errorBlockTemplateNotFound(block.template);
                        _this.onError(message);
                    }
                });
            }
        };
        Editor.prototype.addBlock = function (template) {
            var container = this.getContainer(this.container);
            container.addBlock(template, null, null, true);
        };
        Editor.prototype.createContainer = function () {
            var _this = this;
            var onAdd = function (block, idx) {
                if (_this.isLoaded) {
                    _this.trigger(Events.onBlockAdd, { block: block, idx: idx });
                    _this.trigger(Events.onChange, {
                        blocks: _this.getData(),
                        html: _this.getHtml()
                    });
                }
            };
            var onDelete = function (block, idx) {
                _this.trigger(Events.onBlockDelete, { block: block, idx: idx });
                _this.trigger(Events.onChange, {
                    blocks: _this.getData(),
                    html: _this.getHtml()
                });
            };
            var onUpdate = function (block, property, oldValue, newValue) {
                _this.trigger(Events.onBlockUpdate, {
                    block: block,
                    property: property,
                    oldValue: oldValue,
                    newValue: newValue
                });
                _this.trigger(Events.onChange, {
                    blocks: _this.getData(),
                    html: _this.getHtml()
                });
            };
            return new BlocksContainer(this.$editor, onAdd, onDelete, function (block) {
                _this.trigger(Events.onBlockSelect, { block: block });
            }, function (block) {
                _this.trigger(Events.onBlockDeselect, { block: block });
            }, function (block, from, to) {
                _this.trigger(Events.onBlockMove, { block: block, from: from, to: to });
                _this.trigger(Events.onChange, {
                    blocks: _this.getData(),
                    html: _this.getHtml()
                });
            }, onUpdate, this.options.onUpload);
        };
        Editor.prototype.tryLoadInitialBlocksAsync = function () {
            return __awaiter(this, void 0, Promise, function () {
                var url, editor;
                var _this = this;
                return __generator(this, function (_a) {
                    url = this.options.blocksUrl;
                    editor = this;
                    return [2, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                            var blocks, error_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!url) return [3, 5];
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 3, , 4]);
                                        return [4, $ajax.get(url)];
                                    case 2:
                                        blocks = _a.sent();
                                        resolve(blocks);
                                        return [3, 4];
                                    case 3:
                                        error_1 = _a.sent();
                                        editor.onError(EditorStrings.errorBlocksFileNotFound(url));
                                        reject(error_1);
                                        return [3, 4];
                                    case 4: return [3, 6];
                                    case 5:
                                        if (this.options.blocks) {
                                            resolve(this.options.blocks);
                                        }
                                        else {
                                            resolve(null);
                                        }
                                        _a.label = 6;
                                    case 6: return [2];
                                }
                            });
                        }); })];
                });
            });
        };
        Editor.prototype.getContainer = function (container) {
            if (container.selectedBlock && container.selectedBlock.isContainer()) {
                var field = container.selectedBlock.selectedField;
                if (field) {
                    return this.getContainer(field.container);
                }
            }
            return container;
        };
        Editor.prototype.trigger = function (event, data) {
            var editor = this;
            $dom.trigger(this.$editor, "bre." + event, data);
            Common.propsEach(editor.options, function (key, value) {
                if (str.equalsInvariant(key, event) && value) {
                    value(data);
                }
            });
        };
        return Editor;
    }());

    exports.Editor = Editor$1;

    return exports;

}({}, Selectors$1, HtmlTools, Modal, BaseField$1, Prompt));
