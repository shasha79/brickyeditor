var BrickyEditor = (function (exports) {
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

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

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

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }

    var EditorStrings = (function () {
        function EditorStrings() {
        }
        EditorStrings.embedFieldLinkTitle = "Link to embed media";
        EditorStrings.embedFieldLinkPlaceholder = "Link to instagram, youtube and etc.";
        EditorStrings.imageFieldLinkTitle = "Image link";
        EditorStrings.imageFieldLinkPlaceholder = "http://url-to-image.png";
        EditorStrings.imageFieldUploadTitle = "or Upload a file";
        EditorStrings.imageFieldUploadButton = "Select file";
        EditorStrings.imageFieldAltTitle = "Alt";
        EditorStrings.imageFieldAltPlaceholder = "Image 'alt' attribute value";
        EditorStrings.imageFieldUrlSubtitle = "Link to open on image click";
        EditorStrings.htmlEditorLinkUrlTitle = "Url";
        EditorStrings.htmlEditorLinkUrlPlaceholder = "http://put-your-link.here";
        EditorStrings.htmlEditorLinkTitleTitle = "Title";
        EditorStrings.htmlEditorLinkTitlePlaceholder = "Title attribute for link";
        EditorStrings.htmlEditorLinkTargetTitle = "Target";
        EditorStrings.htmlEditorLinkTargetBlank = "Blank";
        EditorStrings.htmlEditorLinkTargetSelf = "Self";
        EditorStrings.htmlEditorLinkTargetParent = "Parent";
        EditorStrings.htmlEditorLinkTargetTop = "Top";
        EditorStrings.buttonClose = "close";
        EditorStrings.buttonOk = "Ok";
        EditorStrings.buttonCancel = "Cancel";
        EditorStrings.defaultTemplatesGroupName = "Other templates";
        EditorStrings.errorBlocksFileNotFound = function (url) {
            return "Blocks file not found. Requested file: " + url + ".";
        };
        EditorStrings.errorTemplatesFileNotFound = function (url) {
            return "Templates file not found. Requested file: " + url + ".";
        };
        EditorStrings.errorBlockTemplateNotFound = function (templateName) {
            return "Template \"" + templateName + "\" not found.";
        };
        EditorStrings.errorTemplateParsing = function (name) {
            return "Template parsing error: " + name + ".";
        };
        return EditorStrings;
    }());
    //# sourceMappingURL=EditorStrings.js.map

    var el = function (_a) {
        var _b = _a.tag, tag = _b === void 0 ? "div" : _b, className = _a.className, innerHTML = _a.innerHTML, props = _a.props;
        var result = document.createElement(tag);
        if (className !== undefined && className.length > 0) {
            result.className = className;
        }
        if (innerHTML !== undefined) {
            result.innerHTML = innerHTML;
        }
        if (props !== undefined) {
            Object.assign(result, props);
        }
        return result;
    };
    var div = function (className, innerHTML) {
        return el({
            className: className,
            innerHTML: innerHTML
        });
    };
    var createElement = function (html, className) {
        var temp = document.createElement("div");
        temp.innerHTML = html;
        var result = temp.children[0];
        temp.innerHTML = "";
        if (className !== undefined) {
            result.className = className;
        }
        return result;
    };
    var toggleVisibility = function (el, visible) {
        return toggleClassName(el, "bre-hidden", !visible);
    };
    var toggleClassName = function (el, className, force) { return el.classList.toggle(className, force); };
    var parseElementData = function (el, prop) {
        var json = el.dataset[prop];
        if (json === undefined) {
            return null;
        }
        var data = null;
        try {
            data = JSON.parse(json);
        }
        catch (e) {
            if (e instanceof SyntaxError) {
                json = json.replace(/'/g, '"');
                try {
                    data = JSON.parse(json);
                    if (data.name === undefined || data.type === undefined) {
                        return null;
                    }
                }
                catch (_a) {
                    return null;
                }
            }
        }
        return data;
    };
    var readFileAsync = function (file) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2, new Promise(function (resolve, reject) {
                    var reader = new FileReader();
                    reader.onload = function (ev) {
                        if (ev.target !== null && ev.target.result !== null) {
                            var result = ev.target.result.toString();
                            resolve(result);
                        }
                    };
                    try {
                        reader.readAsDataURL(file);
                    }
                    catch (ex) {
                        reject(ex);
                    }
                })];
        });
    }); };
    var objectToArray = function (o) { return Object.keys(o).map(function (x) { return x[o]; }); };
    var filterNotNull = function (value) {
        return value.filter(function (x) { return x !== null; });
    };
    var strEqualsInvariant = function (s1, s2) {
        if (!s1 || !s2) {
            return s1 === s2;
        }
        return s1.toLowerCase() === s2.toLowerCase();
    };
    var insertBefore = function (el, elToInsert) {
        if (elToInsert instanceof HTMLElement) {
            if (el.parentNode !== null) {
                el.parentNode.insertBefore(elToInsert, el);
            }
        }
        else {
            elToInsert.forEach(function ($el) { return insertBefore(el, $el); });
        }
    };
    var insertAfter = function (el, elToInsert) {
        if (el.parentNode === null) {
            return;
        }
        if (el.nextSibling) {
            el.parentNode.insertBefore(elToInsert, el);
        }
        else {
            el.parentNode.appendChild(elToInsert);
        }
    };
    var convertNodeListToArray = function (nl) {
        return Array.prototype.slice.call(nl);
    };
    var helpers = {
        createElement: createElement,
        div: div,
        el: el,
        parseElementData: parseElementData,
        toggleVisibility: toggleVisibility,
        toggleClassName: toggleClassName,
        readFileAsync: readFileAsync,
        objectToArray: objectToArray,
        filterNotNull: filterNotNull,
        convertNodeListToArray: convertNodeListToArray,
        insertBefore: insertBefore,
        insertAfter: insertAfter
    };
    //# sourceMappingURL=helpers.js.map

    var getRequest = function (url) {
        return new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();
            request.open("GET", url, true);
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
    var loadScriptAsync = function (url) {
        return new Promise(function (resolve, reject) {
            var script = document.createElement("script");
            var done = false;
            var scriptDocLoadedHandler = function () {
                var readyState = script.readyState;
                if (done === false &&
                    (readyState === undefined ||
                        readyState === "loaded" ||
                        readyState === "complete")) {
                    done = true;
                    resolve();
                }
                else {
                    reject();
                }
            };
            script.onload = scriptDocLoadedHandler;
            if (script.onreadystatechange !== undefined) {
                script.onreadystatechange = scriptDocLoadedHandler;
            }
            script.src = url.indexOf("//") === 0 ? "https:" + url : url;
            document.head.appendChild(script);
        });
    };
    var jsonp = function (url) {
        return new Promise(function (resolve, reject) {
            var id = "_" + Math.round(10000 * Math.random());
            var callbackName = "jsonp_callback_" + id;
            window[callbackName] = function (data) {
                delete window[callbackName];
                var element = document.getElementById(id);
                if (element !== null) {
                    element.remove();
                }
                resolve(data);
            };
            var src = url + "&callback=" + callbackName;
            var script = document.createElement("script");
            script.src = src;
            script.id = id;
            script.addEventListener("error", reject);
            (document.getElementsByTagName("head")[0] ||
                document.body ||
                document.documentElement).appendChild(script);
        });
    };
    //# sourceMappingURL=httpTransport.js.map

    var FIELD_DATA_ATTR = "data-bre-field";
    var FIELD_SELECTOR = "[" + FIELD_DATA_ATTR + "]";
    var TEMPLATE_GROUP_SELECTOR = ".bre-template-group";
    var TEMPLATE_PREVIEW_SELECTOR = ".bre-template-preview";
    //# sourceMappingURL=constants.js.map

    var isValidFieldType = function (data, type) { return data.type === type; };
    var updateFieldData = function (field, changes, fireEvent) {
        if (fireEvent === void 0) { fireEvent = true; }
        var data = field.data;
        var props = Object.keys(changes);
        var hasChanges = props.some(function (p) { return data[p] !== changes[p]; });
        if (hasChanges) {
            field.data = __assign(__assign({}, data), { changes: changes });
            if (fireEvent) {
                field.fire("change", { field: field });
            }
        }
    };
    var toggleFieldSelection = function (field, selected, fireEvent) {
        if (fireEvent === void 0) { fireEvent = true; }
        helpers.toggleClassName(field.$element, "bre-field-selected", selected);
        if (fireEvent !== undefined && selected) {
            field.fire("select", { field: field });
        }
    };
    var getCleanFieldElement = function ($field) {
        var $el = $field.cloneNode(true);
        $el.attributes.removeNamedItem(FIELD_DATA_ATTR);
        return $el;
    };
    //# sourceMappingURL=field.js.map

    var renderLabel = function ($root, $input, _a) {
        var title = _a.title;
        if (title !== undefined) {
            var $label = helpers.el({
                tag: "label",
                className: "bre-field-editor-label",
                innerHTML: title,
                props: {
                    onclick: function () { return $input.focus(); }
                }
            });
            $root.append($label);
        }
    };
    var renderInput = function (props) {
        var type = props.type, placeholder = props.placeholder;
        var $root = helpers.div("bre-field-editor-prop");
        var $input = helpers.el({
            tag: "input",
            className: "bre-field-editor-input",
            props: {
                type: type,
                placeholder: placeholder || ""
            }
        });
        if (props.type === "text") {
            var updateValue = function () {
                props.onUpdate($input.value);
            };
            $input.value = props.value || "";
            $input.onchange = updateValue;
            $input.onkeyup = updateValue;
            $input.onpaste = updateValue;
        }
        else if ((props.type = "file")) {
            $input.onchange = function () { return __awaiter(void 0, void 0, void 0, function () {
                var files, file, content;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            files = $input.files;
                            file = files === null ? null : files[0];
                            if (!(file !== null)) return [3, 2];
                            return [4, helpers.readFileAsync(file)];
                        case 1:
                            content = _a.sent();
                            props.onUpdate(file, content);
                            _a.label = 2;
                        case 2: return [2];
                    }
                });
            }); };
        }
        renderLabel($root, $input, props);
        $root.append($input);
        return $root;
    };
    var renderSelect = function (props) {
        var placeholder = props.placeholder, value = props.value, options = props.options, onUpdate = props.onUpdate;
        var $root = helpers.div("bre-field-editor-prop");
        var $select = helpers.el({
            tag: "select",
            className: "bre-field-editor-input",
            props: {
                placeholder: placeholder || ""
            }
        });
        $select.onchange = function () { return onUpdate($select.value); };
        $select.innerHTML = options
            .map(function (x) {
            return "<option value=\"" + x.value + "\" " + (x.value === value ? "selected" : "") + ">" + (x.label || x.value) + "</option>";
        })
            .join("\n");
        renderLabel($root, $select, props);
        $root.append($select);
        return $root;
    };
    //# sourceMappingURL=inputs.js.map

    var locales = {
        errorBlocksFileNotFound: function (url) {
            return "Blocks file not found. Requested file: " + url + ".";
        },
        errorTemplatesFileNotFound: function (url) {
            return "Templates file not found. Requested file: " + url + ".";
        },
        errorBlockTemplateNotFound: function (templateName) {
            return "Template \"" + templateName + "\" not found.";
        },
        errorTemplateParsing: function (name) {
            return "Template parsing error: " + name + ".";
        },
        embedFieldLinkTitle: "Link to embed media",
        embedFieldLinkPlaceholder: "Link to instagram, youtube and etc.",
        prompt: {
            image: {
                link: {
                    title: "Image link",
                    placeholder: "http://url-to-image.png",
                },
                alt: {
                    title: "Image alt",
                    placeholder: "Image 'alt' attribute value",
                },
                upload: {
                    title: "or Upload a file",
                    placeholder: "select file",
                    button: "Select file",
                },
                url: {
                    subtitle: "Link to open on image click",
                },
            },
            embed: {
                url: {
                    title: "URL to media",
                    placeholder: "Paste link to youtube, instagram, etc.",
                },
            },
            link: {
                href: {
                    title: "Url",
                    placeholder: "https://put-your-link.here",
                },
                title: {
                    title: "Title",
                    placeholder: "Title attribute for link",
                },
                target: {
                    title: "Target",
                    blank: "Blank",
                    self: "Self",
                    parent: "Parent",
                    top: "Top",
                },
            },
        },
        htmlEditorLinkUrlTitle: "Url",
        htmlEditorLinkUrlPlaceholder: "http://put-your-link.here",
        htmlEditorLinkTitleTitle: "Title",
        htmlEditorLinkTitlePlaceholder: "Title attribute for link",
        htmlEditorLinkTargetTitle: "Target",
        htmlEditorLinkTargetBlank: "Blank",
        htmlEditorLinkTargetSelf: "Self",
        htmlEditorLinkTargetParent: "Parent",
        htmlEditorLinkTargetTop: "Top",
        buttonClose: "close",
        buttonOk: "Ok",
        buttonCancel: "Cancel",
        defaultTemplatesGroupName: "Other templates",
    };
    //# sourceMappingURL=locales.js.map

    var linkEditor = function (initialData) {
        var data = initialData ? __assign({}, initialData) : {};
        var $element = helpers.div("bre-field-editor-root");
        var $href = renderInput(__assign(__assign({}, locales.prompt.link.href), { value: data.href, type: "text", onUpdate: function (v) { return (data.href = v); } }));
        var $title = renderInput(__assign(__assign({}, locales.prompt.link.title), { value: data.title, type: "text", onUpdate: function (v) { return (data.title = v); } }));
        var $target = renderSelect(__assign(__assign({}, locales.prompt.link.target), { value: data.target, options: [
                { value: "" },
                { value: "_blank" },
                { value: "_self" },
                { value: "_parent" },
                { value: "_top" }
            ], onUpdate: function (v) { return (data.target = v); } }));
        $element.append($href, $title, $target);
        return {
            $element: $element,
            data: data
        };
    };
    //# sourceMappingURL=linkEditor.js.map

    var getSelectionRanges = function () {
        var selection = window.getSelection();
        if (selection === null) {
            return null;
        }
        var selectionRanges = [];
        for (var idx = 0; idx < selection.rangeCount; idx++) {
            selectionRanges.push(selection.getRangeAt(idx));
        }
        return selectionRanges;
    };
    var restoreSelection = function (selectionRanges) {
        if (selectionRanges === null || selectionRanges.length === 0) {
            return;
        }
        var selection = window.getSelection();
        if (selection !== null) {
            selection.removeAllRanges();
            selectionRanges.forEach(function (range) { return selection.addRange(range); });
        }
    };
    var bindTextSelection = function ($el, handler) {
        if (!$el.contentEditable) {
            return;
        }
        $el.addEventListener("mouseup", function () {
            setTimeout(function () {
                var rect = getSelectionRect();
                handler(rect);
            }, 0);
        });
        $el.addEventListener("keyup", function () {
            var rect = getSelectionRect();
            handler(rect);
        });
    };
    var getSelectionRect = function () {
        var selection = window.getSelection();
        if (selection === null) {
            return null;
        }
        var range = selection.getRangeAt(0);
        return range.getBoundingClientRect();
    };
    //# sourceMappingURL=selection.js.map

    var dialog = function ($content, ok, cancel) {
        var selection = getSelectionRanges();
        var root = helpers.div("bre-modal");
        var close = function () {
            root.remove();
            restoreSelection(selection);
        };
        var $ok = helpers.el({
            tag: "button",
            props: {
                type: "button",
                onclick: function () {
                    if (ok) {
                        ok();
                    }
                    close();
                },
                innerHTML: "Ok"
            }
        });
        var $cancel = helpers.el({
            tag: "button",
            props: {
                type: "button",
                onclick: function () {
                    if (cancel) {
                        cancel();
                    }
                    close();
                },
                innerHTML: "Cancel"
            }
        });
        var $placeholder = helpers.div("bre-modal-placeholder");
        $placeholder.append($content, $ok, $cancel);
        root.append($placeholder);
        document.body.appendChild(root);
    };
    //# sourceMappingURL=modal.js.map

    var promptLinkParamsAsync = function (initialData) {
        return new Promise(function (resolve) {
            var _a = linkEditor(initialData), $editor = _a.$element, updatedData = _a.data;
            dialog($editor, function () {
                resolve(updatedData);
            }, function () {
                resolve(null);
            });
        });
    };
    var renderButtonElement = function (_a) {
        var icon = _a.icon, command = _a.command, range = _a.range, aValueArgument = _a.aValueArgument;
        var $btn = helpers.createElement("<button type=\"button\" class=\"bre-btn\"><i class=\"fa fa-" + icon + "\"></i></button>");
        $btn.onclick = function () { return __awaiter(void 0, void 0, void 0, function () {
            var selection, selectionRange, selectedLink, currentLink, updatedLink, valueArgument;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        selection = window.getSelection();
                        if (selection === null) {
                            return [2];
                        }
                        selectionRange = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
                        if (range && !selectionRange) {
                            return [2];
                        }
                        if (!(command === "CreateLink")) return [3, 2];
                        selectedLink = getSeletedLink(selection);
                        currentLink = selectedLink !== null
                            ? {
                                href: selectedLink.href,
                                title: selectedLink.title,
                                target: selectedLink.target
                            }
                            : {};
                        return [4, promptLinkParamsAsync(currentLink)];
                    case 1:
                        updatedLink = _a.sent();
                        if (updatedLink !== null && updatedLink.href) {
                            document.execCommand(command, false, updatedLink.href);
                            if (selection.anchorNode !== null &&
                                selection.anchorNode.parentElement !== null) {
                                if (updatedLink.target) {
                                    selection.anchorNode.parentElement.setAttribute("target", updatedLink.target);
                                }
                                if (updatedLink.title) {
                                    selection.anchorNode.parentElement.setAttribute("title", updatedLink.title);
                                }
                            }
                        }
                        return [3, 3];
                    case 2:
                        valueArgument = void 0;
                        if (typeof aValueArgument === "string") {
                            valueArgument = aValueArgument.replace("%%SELECTION%%", selection.toString());
                        }
                        try {
                            document.execCommand(command, false, valueArgument);
                        }
                        catch (_b) {
                            wrapSelectionToContainer(selection);
                            document.execCommand(command, false, valueArgument);
                        }
                        _a.label = 3;
                    case 3: return [2, false];
                }
            });
        }); };
        return $btn;
    };
    var getSeletedLink = function (selection) {
        if (selection.anchorNode !== null &&
            selection.anchorNode.parentNode !== null &&
            strEqualsInvariant(selection.anchorNode.parentNode.nodeName, "a")) {
            return selection.anchorNode.parentNode;
        }
        return null;
    };
    var renderControl = function (buttons) {
        var $panel = helpers.createElement('<div class="bre-html-tools-panel"></div>');
        buttons.map(renderButtonElement).forEach(function ($btn) { return $panel.appendChild($btn); });
        var $controlRoot = helpers.createElement('<div class="bre-html-tools bre-btn-group"></div>');
        $controlRoot.appendChild($panel);
        helpers.toggleVisibility($controlRoot, false);
        return $controlRoot;
    };
    var wrapSelectionToContainer = function (selection) {
        if (selection.anchorNode === null) {
            return;
        }
        var $container = selection.anchorNode.parentElement;
        if ($container !== null) {
            var $wrapper = helpers.createElement("<div class=\"bre-temp-container\" contenteditable=\"true\">" + $container.innerHTML + "</div>");
            $container.innerHTML = "";
            $container.removeAttribute("contenteditable");
            $container.appendChild($wrapper);
            var range = document.createRange();
            range.selectNodeContents($wrapper);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    };
    var control;
    var initHtmlTools = function (_a) {
        var htmlToolsButtons = _a.htmlToolsButtons;
        if (htmlToolsButtons) {
            control = renderControl(htmlToolsButtons);
            document.body.appendChild(control);
        }
    };
    var toggleHtmlTools = function (rect) {
        if (rect !== null && rect.width > 1) {
            var top = rect.top + rect.height;
            var left = rect.left;
            control.style.top = top + "px";
            control.style.left = left + "px";
            helpers.toggleVisibility(control, true);
        }
        else {
            helpers.toggleVisibility(control, false);
        }
    };
    //# sourceMappingURL=htmlTools.js.map

    var emitter = function () {
        var listeners = {};
        var on = function (type, listener) {
            if (listeners[type] === undefined) {
                listeners[type] = [];
            }
            var listenersOfType = listeners[type];
            if (listenersOfType.indexOf(listener) !== -1) {
                return;
            }
            listenersOfType.push(listener);
        };
        var off = function (type, listener) {
            var listenersOfType = listeners[type];
            if (listenersOfType === undefined) {
                return;
            }
            else {
                var idx = listenersOfType.indexOf(listener);
                if (idx > -1) {
                    listenersOfType.splice(idx, 1);
                }
            }
        };
        var fire = function (type, ev) {
            var listenersOfType = listeners[type];
            if (listenersOfType === undefined) {
                return;
            }
            else {
                listenersOfType.forEach(function (listener) { return listener(ev); });
            }
        };
        return { fire: fire, on: on, off: off };
    };
    //# sourceMappingURL=emitter.js.map

    var MaxPreviewLength = 50;
    var html = function (props) {
        var $element = props.$element, data = props.data;
        if (!isValidFieldType(data, "html")) {
            return null;
        }
        if (props.preview) {
            $element.innerHTML =
                $element.innerHTML.length > MaxPreviewLength
                    ? $element.innerHTML.substr(0, MaxPreviewLength) + "..."
                    : $element.innerHTML;
            return {
                $element: $element
            };
        }
        bind($element, data);
        var eventEmiter = emitter();
        var field = __assign(__assign({}, eventEmiter), { $element: $element,
            data: data, html: getHtml, parentBlock: props.parentBlock });
        var updateHtmlProp = function () {
            var html = $element.innerHTML.trim();
            if ($element.innerHTML !== html) {
                var updatedData = {
                    html: html
                };
                updateFieldData(field, updatedData);
            }
        };
        $element.setAttribute("contenteditable", "true");
        bindTextSelection($element, function (rect) {
            toggleHtmlTools(rect);
        });
        $element.addEventListener("blur", updateHtmlProp);
        $element.addEventListener("keyup", updateHtmlProp);
        $element.addEventListener("paste", updateHtmlProp);
        $element.addEventListener("input", updateHtmlProp);
        $element.addEventListener("paste", function (ev) {
            ev.preventDefault();
            if (ev.clipboardData) {
                var text = ev.clipboardData.getData("text/plain");
                document.execCommand("insertHTML", false, text);
            }
        });
        $element.addEventListener("click", function (ev) {
            ev.stopPropagation();
            toggleFieldSelection(field, true);
            return false;
        });
        return field;
    };
    function bind($element, _a) {
        var html = _a.html;
        if (html !== undefined) {
            $element.innerHTML = html;
        }
    }
    function getHtml(field) {
        var $copy = getCleanFieldElement(field.$element);
        $copy.removeAttribute("contenteditable");
        return $copy;
    }
    //# sourceMappingURL=html.js.map

    var preProcessEmbedUrl = function (url) {
        return url.replace("https://www.instagram.com", "http://instagr.am");
    };
    var postProcessEmbed = function (provider) {
        switch (provider) {
            case "Instagram":
                var instgrm = window.instgrm;
                if (instgrm !== undefined) {
                    instgrm.Embeds.process();
                }
                break;
        }
    };
    var getEmbedAsync = function (embedUrl) {
        var url = "https://noembed.com/embed?url=" + embedUrl;
        return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
            var data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, jsonp(url)];
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
    //# sourceMappingURL=embed.js.map

    var propmtFieldEditorAsync = function (_a) {
        var editor = _a.editor, data = _a.data;
        return new Promise(function (resolve) {
            if (editor === undefined) {
                resolve(null);
                return;
            }
            var _a = editor(data), $editor = _a.$element, updatedData = _a.data;
            dialog($editor, function () {
                resolve(updatedData);
            }, function () {
                resolve(null);
            });
        });
    };
    //# sourceMappingURL=editors.js.map

    var providerScriptsLoaded = {};
    var embed = function (props) {
        var $element = props.$element, data = props.data;
        if (!isValidFieldType(data, "embed")) {
            return null;
        }
        if (props.preview) {
            return { $element: $element };
        }
        bind$1($element, data);
        var eventEmitter = emitter();
        var field = __assign(__assign({}, eventEmitter), { $element: $element,
            data: data,
            html: html$1,
            editor: editor, parentBlock: props.parentBlock });
        $element.addEventListener("click", function (ev) { return __awaiter(void 0, void 0, void 0, function () {
            var updatedData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ev.stopPropagation();
                        toggleFieldSelection(field, true);
                        return [4, propmtFieldEditorAsync(field)];
                    case 1:
                        updatedData = _a.sent();
                        if (updatedData !== null) {
                            bind$1(field.$element, updatedData);
                            updateFieldData(field, updatedData);
                        }
                        return [2];
                }
            });
        }); });
        return field;
    };
    function html$1(field) {
        return getCleanFieldElement(field.$element);
    }
    function editor(initialData) {
        var data = __assign({}, initialData);
        var $element = helpers.div("bre-field-editor-root");
        var $preview = helpers.div("bre-field-editor-preview");
        bind$1($preview, data);
        var $url = renderInput(__assign(__assign({}, locales.prompt.embed.url), { value: data.url || "", type: "text", onUpdate: function (v) {
                if (data.url != v) {
                    data.url = v;
                    bind$1($preview, data);
                }
            } }));
        $element.append($preview, $url);
        return {
            $element: $element,
            data: data
        };
    }
    function bind$1($element, _a) {
        var url = _a.url;
        return __awaiter(this, void 0, void 0, function () {
            var embed, $embed, $script;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (url === undefined) {
                            return [2];
                        }
                        return [4, getEmbedAsync(preProcessEmbedUrl(url))];
                    case 1:
                        embed = _b.sent();
                        $embed = helpers.createElement(embed.html);
                        $script = $embed.querySelector("script");
                        if ($script !== null) {
                            $script.remove();
                        }
                        $element.innerHTML = "";
                        $element.appendChild($embed);
                        if (!($script !== null)) return [3, 4];
                        if (!(providerScriptsLoaded[$script.src] === undefined)) return [3, 3];
                        return [4, loadScriptAsync($script.src)];
                    case 2:
                        _b.sent();
                        providerScriptsLoaded[embed.provider_name] = true;
                        _b.label = 3;
                    case 3:
                        setTimeout(function () { return postProcessEmbed(embed.provider_name); }, 100);
                        _b.label = 4;
                    case 4: return [2];
                }
            });
        });
    }
    //# sourceMappingURL=embed.js.map

    var container = function (props) {
        var $element = props.$element, data = props.data;
        if (!isValidFieldType(data, "container")) {
            return null;
        }
        if (props.preview) {
            return { $element: $element };
        }
        $element.addEventListener("click", function (ev) {
            ev.stopPropagation();
            toggleFieldSelection(field, true);
        });
        var field = __assign(__assign({}, emitter()), { $element: $element,
            data: data,
            html: html$2, parentBlock: props.parentBlock });
        var fieldContainer = createFieldContainer(field);
        field.container = fieldContainer;
        if (data.blocks && data.blocks.length > 0) {
            data.blocks.map(function (blockData) {
                return addBlockToContainer(fieldContainer, {
                    blockData: blockData
                }, false);
            });
        }
        return field;
    };
    var isContainerField = function (field) {
        return field.data.type === "container";
    };
    var html$2 = function (field) {
        var container = field.container;
        var html = getContainerHtml(container);
        return helpers.createElement(html);
    };
    //# sourceMappingURL=container.js.map

    var image = function (props) {
        var $element = props.$element, data = props.data;
        if (!isValidFieldType(data, "image")) {
            return null;
        }
        bind$2($element, data);
        if (props.preview) {
            return {
                $element: $element
            };
        }
        var eventEmiter = emitter();
        var field = __assign(__assign({}, eventEmiter), { $element: $element,
            data: data,
            html: html$3,
            editor: editor$1, parentBlock: props.parentBlock });
        $element.addEventListener("click", function (ev) { return __awaiter(void 0, void 0, void 0, function () {
            var updatedData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ev.stopPropagation();
                        toggleFieldSelection(field, true);
                        return [4, propmtFieldEditorAsync(field)];
                    case 1:
                        updatedData = _a.sent();
                        if (updatedData !== null) {
                            bind$2(field.$element, updatedData);
                            updateFieldData(field, updatedData);
                        }
                        return [2];
                }
            });
        }); });
        return field;
    };
    function bind$2($element, data) {
        var src = getSrcOrFile(data);
        var alt = data.alt || "";
        var isImageElement = $element.tagName.toLowerCase() === "img";
        if (isImageElement) {
            var image_1 = $element;
            image_1.src = src;
            image_1.alt = alt;
        }
        else {
            $element.style.backgroundImage = "url(" + src + ")";
        }
        $element.title = alt;
    }
    function editor$1(initialData) {
        var _this = this;
        var data = __assign({}, initialData);
        var $element = helpers.div("bre-field-editor-root");
        var $previewImg = helpers.el({
            tag: "img",
            className: "bre-field-editor-preview-img",
            props: {
                src: getSrcOrFile(data)
            }
        });
        var $preview = helpers.div("bre-field-editor-preview");
        $preview.appendChild($previewImg);
        var $src = renderInput(__assign(__assign({}, locales.prompt.image.link), { value: data.src, type: "text", onUpdate: function (src) {
                $previewImg.src = src;
                data.src = src;
                data.file = undefined;
            } }));
        var $file = renderInput(__assign(__assign({}, locales.prompt.image.upload), { type: "file", value: data.file ? data.file.fileContent : "", onUpdate: function (f, fileContent) { return __awaiter(_this, void 0, void 0, function () {
                var fileInfo;
                return __generator(this, function (_a) {
                    $previewImg.src = fileContent;
                    fileInfo = {
                        name: f.name,
                        size: f.size,
                        type: f.type,
                        lastModified: f.lastModified
                    };
                    data.src = undefined;
                    data.file = {
                        fileContent: fileContent,
                        fileInfo: fileInfo
                    };
                    return [2];
                });
            }); } }));
        var $alt = renderInput(__assign(__assign({}, locales.prompt.image.alt), { value: data.alt, type: "text", onUpdate: function (v) { return (data.alt = $previewImg.alt = v); } }));
        var _a = linkEditor(initialData.link), $link = _a.$element, linkData = _a.data;
        data.link = linkData;
        $element.append($preview, $src, $file, $alt, $link);
        return {
            $element: $element,
            data: data
        };
    }
    function html$3(field) {
        var $element = field.$element, data = field.data;
        var link = data.link;
        var $result = getCleanFieldElement($element);
        if (link !== undefined && link.href !== undefined && link.href.length) {
            var $link = helpers.el({
                tag: "a",
                props: link
            });
            $link.appendChild($result);
            return $link;
        }
        return $result;
    }
    function getSrcOrFile(data) {
        return data.src || (data.file !== undefined ? data.file.fileContent : "");
    }
    //# sourceMappingURL=image.js.map

    var fields = {
        html: html,
        image: image,
        embed: embed,
        container: container
    };
    var getFieldFunc = function (type) { return fields[type]; };
    var createField = function (props) {
        var $element = props.$element, initialData = props.data;
        var data = helpers.parseElementData($element, "breField");
        if (data === null) {
            return null;
        }
        if (initialData !== undefined) {
            data = __assign(__assign({}, data), initialData);
        }
        var field = getFieldFunc(data.type);
        if (field === undefined) {
            throw new Error(data.type + " field not found");
        }
        return field(props);
    };
    var bindBlockFields = function ($element, block) {
        var $fieldElement = findFieldElements($element);
        var fields = $fieldElement.map(function ($fieldElement) {
            return bindBlockField($fieldElement, block);
        });
        return helpers.filterNotNull(fields);
    };
    var bindTemplateFields = function ($element) {
        var $fieldElement = findFieldElements($element);
        var fields = $fieldElement.map(function ($fieldElement) {
            return bindTemplateField($fieldElement);
        });
        return helpers.filterNotNull(fields);
    };
    function bindBlockField($element, parentBlock) {
        var data = helpers.parseElementData($element, "breField");
        if (data === null) {
            return null;
        }
        data = getFieldDataByName(parentBlock, data.name) || data;
        return createField({
            parentBlock: parentBlock,
            $element: $element,
            preview: false,
            data: data
        });
    }
    function bindTemplateField($element) {
        var data = helpers.parseElementData($element, "breField");
        if (data === null) {
            return null;
        }
        return createField({
            $element: $element,
            data: data,
            preview: true
        });
    }
    function getFieldDataByName(block, name) {
        if (!block.data || !block.data.fields) {
            return null;
        }
        var field = block.data.fields.find(function (f) { return strEqualsInvariant(f.name, name); });
        if (field === undefined) {
            return null;
        }
        return field;
    }
    function findFieldElements($html) {
        var nodes = $html.querySelectorAll(FIELD_SELECTOR);
        var $fields = nodes.length > 0 ? Array.prototype.slice.call(nodes) : [];
        if ($html.attributes.getNamedItem(FIELD_DATA_ATTR) !== null) {
            $fields = __spreadArrays($fields, [$html]);
        }
        return $fields;
    }
    //# sourceMappingURL=fields.js.map

    var allTemplates = [];
    var getTemplate = function (templateName) {
        var template = allTemplates.find(function (x) {
            return strEqualsInvariant(x.name, templateName);
        });
        if (template === undefined) {
            throw new Error("Template is not registred: " + templateName);
        }
        return template;
    };
    var loadTemplatesAsync = function (url, $editor) { return __awaiter(void 0, void 0, void 0, function () {
        var grouppedTemplates, data, $data, $style, $groups, ungrouppedTemplates, ungrouppedTemplatesGroupName, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    grouppedTemplates = [];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4, getRequest(url)];
                case 2:
                    data = _a.sent();
                    $data = helpers.createElement("<div>" + data + "</div>");
                    $style = $data.querySelector("style");
                    if ($style !== null) {
                        helpers.insertBefore($editor, $style);
                    }
                    $groups = $data.querySelectorAll(TEMPLATE_GROUP_SELECTOR);
                    $groups.forEach(function ($group) {
                        var name = $group.getAttribute("title");
                        var templates = parseTemplates($group);
                        grouppedTemplates.push({ name: name, templates: templates });
                        $group.remove();
                        allTemplates = __spreadArrays(allTemplates, templates);
                    });
                    ungrouppedTemplates = parseTemplates($data);
                    ungrouppedTemplatesGroupName = grouppedTemplates.length > 0
                        ? EditorStrings.defaultTemplatesGroupName
                        : "";
                    grouppedTemplates.push({
                        name: ungrouppedTemplatesGroupName,
                        templates: ungrouppedTemplates
                    });
                    allTemplates = __spreadArrays(allTemplates, ungrouppedTemplates);
                    return [2, grouppedTemplates];
                case 3:
                    err_1 = _a.sent();
                    throw err_1;
                case 4: return [2];
            }
        });
    }); };
    var templateClassName = "bre-template";
    var templateSelector = "." + templateClassName;
    var parseTemplates = function ($el) {
        var $templates = $el.querySelectorAll(templateSelector);
        var templates = helpers
            .convertNodeListToArray($templates)
            .map(createTemplate);
        return helpers.filterNotNull(templates);
    };
    var createTemplate = function ($template) {
        var name = $template.dataset.name || "";
        var $preview = $template.querySelector(TEMPLATE_PREVIEW_SELECTOR);
        if ($preview !== null) {
            $preview.remove();
        }
        else {
            $preview = $template.cloneNode(true);
            bindTemplateFields($preview);
        }
        return {
            name: name,
            $template: $template,
            $preview: $preview
        };
    };
    //# sourceMappingURL=template.js.map

    var iconDelete = "<svg viewBox=\"0 0 512 512\">\n  <path stroke-width=\"32\" d=\"M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320\"/>\n  <path stroke-miterlimit=\"10\" stroke-width=\"32\" d=\"M80 112h352\"/>\n  <path stroke-width=\"32\" d=\"M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224\"/>\n</svg>";
    //# sourceMappingURL=iconDelete.js.map

    var iconCopy = "<svg viewBox=\"0 0 512 512\">\n  <rect width=\"336\" height=\"336\" x=\"128\" y=\"128\" stroke-width=\"32\" rx=\"57\" ry=\"57\"/>\n  <path stroke-width=\"32\" d=\"M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24\"/>\n</svg>";
    //# sourceMappingURL=iconCopy.js.map

    var iconUp = "<svg viewBox=\"0 0 512 512\">\n  <path stroke-width=\"48\" d=\"M112 328l144-144 144 144\"/>\n</svg>";
    //# sourceMappingURL=iconUp.js.map

    var iconDown = "<svg viewBox=\"0 0 512 512\">\n  <path stroke-width=\"48\" d=\"M112 184l144 144 144-144\"/>\n</svg>";
    //# sourceMappingURL=iconDown.js.map

    var defaultButtons = [
        {
            name: "delete",
            icon: iconDelete,
            action: function (ff) { return ff("delete"); }
        },
        {
            name: "clone",
            icon: iconCopy,
            action: function (ff) { return ff("clone"); }
        },
        {
            name: "up",
            icon: iconUp,
            action: function (ff) { return ff("move", { offset: -1 }); },
            visibility: function (block) { return block.parentContainer.blocks.indexOf(block) !== 0; }
        },
        {
            name: "down",
            icon: iconDown,
            action: function (ff) { return ff("move", { offset: 1 }); },
            visibility: function (block) {
                return block.parentContainer.blocks.indexOf(block) !==
                    block.parentContainer.blocks.length - 1;
            }
        }
    ];
    var createEditor = function () {
        var $element = helpers.div("bre-block-editor");
        var buttons = defaultButtons.map(function (button) {
            var $btn = helpers.div("bre-block-editor-button", button.icon);
            $btn.title = name;
            $element.append($btn);
            return {
                $element: $btn,
                button: button
            };
        });
        return {
            $element: $element,
            buttons: buttons
        };
    };
    var setupBlockEditor = function (block) {
        if (block.blockEditor === undefined) {
            block.blockEditor = createEditor();
            block.blockEditor.buttons.forEach(function (_a) {
                var $btn = _a.$element, button = _a.button;
                $btn.onclick = function () { return button.action(block.fire); };
            });
            block.$element.prepend(block.blockEditor.$element);
        }
        block.blockEditor.buttons.forEach(function (_a) {
            var $btn = _a.$element, button = _a.button;
            if (button.visibility !== undefined) {
                var visible = button.visibility(block);
                helpers.toggleVisibility($btn, visible);
            }
        });
        return block.blockEditor;
    };
    var showBlockEditor = function (block, active) {
        var editor = setupBlockEditor(block);
        helpers.toggleVisibility(editor.$element, true);
        helpers.toggleClassName(editor.$element, "bre-block-editor-vertical", !active);
        return editor;
    };
    var hideBlockEditor = function (block) {
        var editor = block.blockEditor;
        if (editor !== undefined) {
            helpers.toggleVisibility(editor.$element, false);
            helpers.toggleClassName(editor.$element, "bre-block-editor-vertical", false);
        }
    };

    var getInitialState = function () { return ({
        selectedField: null,
        selectedBlocks: [],
        selectedContainers: []
    }); };
    var selectField = function (selectedField) {
        var state = selectedField.parentBlock.state;
        if (state.selectedField === selectedField) {
            return;
        }
        var prevSelectedField = state.selectedField;
        if (prevSelectedField !== null) {
            toggleFieldSelection(prevSelectedField, false, true);
        }
        if (isContainerField(selectedField)) {
            selectBlock(selectedField.parentBlock, false);
            selectContainer(selectedField.container);
        }
        else {
            selectBlock(selectedField.parentBlock);
        }
        state.selectedField = selectedField;
    };
    var selectBlock = function (selectedBlock, triggerSelectContainer) {
        if (triggerSelectContainer === void 0) { triggerSelectContainer = true; }
        var state = selectedBlock.state;
        if (state.selectedBlocks[0] === selectedBlock) {
            return;
        }
        state.selectedField = null;
        var prevSelectedBlocks = state.selectedBlocks;
        var selectedBlocks = getParentBlocks(selectedBlock);
        state.selectedBlocks = selectedBlocks;
        if (prevSelectedBlocks.length > 0) {
            prevSelectedBlocks.forEach(function (block) {
                toggleBlockSelection(block, false);
            });
        }
        selectedBlocks.forEach(function (block, idx) {
            if (!block.selected) {
                toggleBlockSelection(block, true, idx === 0);
            }
        });
        if (triggerSelectContainer) {
            selectContainer(selectedBlock.parentContainer);
        }
    };
    var getParentBlocks = function (block, blocks) {
        if (blocks === void 0) { blocks = []; }
        blocks.push(block);
        var parentContainerField = block.parentContainer.parentContainerField;
        if (parentContainerField !== null) {
            return getParentBlocks(parentContainerField.parentBlock, blocks);
        }
        return blocks;
    };
    var selectContainer = function (selectedContainer) {
        var state = selectedContainer.state;
        var selectedContainers = getParentContainers(selectedContainer);
        state.selectedContainers = selectedContainers;
    };
    var getParentContainers = function (container) {
        if (container.parentContainerField !== null) {
            var blocks = getParentBlocks(container.parentContainerField.parentBlock);
            return __spreadArrays([container], blocks.map(function (block) { return block.parentContainer; }));
        }
        return [container];
    };
    //# sourceMappingURL=editorState.js.map

    var toggleBlockSelection = function (block, selected, active) {
        if (active === void 0) { active = false; }
        block.selected = selected;
        helpers.toggleClassName(block.$element, "bre-block-selected", selected);
        if (selected) {
            showBlockEditor(block, active);
        }
        else {
            hideBlockEditor(block);
        }
    };
    var createBlockFromData = function (parentContainer, blockData) {
        var _a = getTemplate(blockData.template), name = _a.name, $template = _a.$template;
        return createBlockFromTemplate(parentContainer, name, $template, blockData);
    };
    var createBlockFromTemplate = function (parentContainer, name, $template, data) {
        if (data === void 0) { data = {
            template: name,
            fields: []
        }; }
        var $element = $template.cloneNode(true);
        helpers.toggleClassName($element, "bre-template", false);
        helpers.toggleClassName($element, "bre-block", true);
        var eventEmitter = emitter();
        var block = __assign(__assign({}, eventEmitter), { parentContainer: parentContainer, state: parentContainer.state, $element: $element,
            data: data, selected: false });
        block.fields = bindBlockFields($element, block);
        block.fields.forEach(function (field) {
            if (field.on !== undefined) {
                field.on("select", function () {
                    selectField(field);
                });
            }
        });
        return block;
    };
    var getBlockHtml = function (block, trim) {
        return "";
    };
    //# sourceMappingURL=Block.js.map

    var iconContainer = "<svg viewBox=\"0 0 512 512\">\n  <rect width=\"176\" height=\"176\" x=\"48\" y=\"48\" rx=\"20\" ry=\"20\"/>\n  <rect width=\"176\" height=\"176\" x=\"288\" y=\"48\" rx=\"20\" ry=\"20\"/>\n  <rect width=\"176\" height=\"176\" x=\"48\" y=\"288\" rx=\"20\" ry=\"20\"/>\n  <rect width=\"176\" height=\"176\" x=\"288\" y=\"288\" rx=\"20\" ry=\"20\"/>\n</svg>";
    //# sourceMappingURL=iconContainer.js.map

    var getContainerData = function (container) {
        return container.blocks.map(function (block) { return block.data; });
    };
    var getContainerHtml = function (container) {
        var html = container.blocks
            .map(function (block) { return getBlockHtml(); })
            .join("\n");
        var root = container.$element.cloneNode(false);
        root.innerHTML = html;
        return root.outerHTML;
    };
    var defaultPlaceholder = helpers.div("bre-container-placeholder", iconContainer);
    var toggleContainersPlaceholder = function (container) {
        if (container.$placeholder === null) {
            return;
        }
        if (container.$element.childElementCount === 0) {
            container.$element.appendChild(container.$placeholder);
        }
        else {
            container.$placeholder.remove();
        }
    };
    var addBlockToContainer = function (container, options, select) {
        var blocks = container.blocks, selectedBlock = container.selectedBlock;
        var block = options.blockData !== undefined
            ? createBlockFromData(container, options.blockData)
            : createBlockFromTemplate(container, options.blockTemplate.name, options.blockTemplate.$template);
        var idx = options.idx;
        if (idx === undefined) {
            idx =
                selectedBlock !== null
                    ? blocks.indexOf(selectedBlock) + 1
                    : blocks.length;
        }
        container.blocks = __spreadArrays(blocks.slice(0, idx), [block], blocks.slice(idx));
        block.on("delete", function () {
            deleteBlock(container, block);
        });
        block.on("clone", function () {
            copyBlock(container, block);
        });
        block.on("move", function (ev) {
            moveBlock(container, block, ev !== undefined ? ev.offset : 0);
        });
        block.on("select", function () {
            selectBlock(block);
        });
        toggleContainersPlaceholder(container);
        var $container = container.$element;
        var $block = block.$element;
        if (idx === 0) {
            $container.append($block);
        }
        else {
            var $prevBlock = blocks[idx - 1].$element;
            $prevBlock.after($block);
        }
        if (select) {
            selectBlock(block);
        }
        return block;
    };
    var createRootContainer = function (editor) {
        return createContainer(editor.$element, editor.state, null, editor);
    };
    var createFieldContainer = function (field) {
        return createContainer(field.$element, field.parentBlock.state, field, null);
    };
    var createContainer = function ($element, state, parentContainerField, parentEditor) {
        var $placeholder = defaultPlaceholder.cloneNode(true);
        var eventEmitter = emitter();
        var container = __assign({ state: state,
            $element: $element,
            $placeholder: $placeholder, blocks: [], selectedBlock: null, parentContainerField: parentContainerField,
            parentEditor: parentEditor }, eventEmitter);
        toggleContainersPlaceholder(container);
        return container;
    };
    function deleteBlock(container, block) {
        container.blocks = container.blocks.filter(function (b) { return b !== block; });
        block.$element.remove();
        block = null;
        toggleContainersPlaceholder(container);
    }
    function copyBlock(container, block) {
        var idx = container.blocks.indexOf(block) + 1;
        addBlockToContainer(container, {
            idx: idx,
            blockData: block.data
        }, true);
    }
    function moveBlock(container, block, offset) {
        var idx = container.blocks.indexOf(block);
        var new_idx = idx + offset;
        if (new_idx >= container.blocks.length || new_idx < 0) {
            return;
        }
        var $anchorBlock = container.blocks[new_idx].$element;
        if ($anchorBlock) {
            if (offset > 0) {
                helpers.insertAfter($anchorBlock, block.$element);
            }
            else if (offset < 0) {
                helpers.insertBefore($anchorBlock, block.$element);
            }
        }
        selectBlock(block);
        container.blocks.splice(idx, 1);
        container.blocks.splice(new_idx, 0, block);
    }
    //# sourceMappingURL=blocksContainer.js.map

    var defaultButtons$1 = [
        { icon: "bold", command: "Bold", range: true },
        { icon: "italic", command: "Italic", range: true },
        { icon: "link", command: "CreateLink", range: true },
        {
            icon: "list-ul",
            command: "insertUnorderedList",
            range: true
        },
        {
            icon: "list-ol",
            command: "insertOrderedList",
            range: true
        },
        { icon: "undo", command: "Undo", range: false },
        { icon: "repeat", command: "Redo", range: false }
    ];
    var defaultOptions = {
        templatesUrl: "templates/bootstrap4.html",
        compactTools: false,
        compactToolsWidth: 768,
        ignoreHtml: true,
        htmlToolsButtons: defaultButtons$1
    };
    //# sourceMappingURL=defaults.js.map

    var getTemplateUI = function (template) {
        var $template = helpers.div("bre-templates-group-item");
        var $preview = template.$preview;
        $preview.setAttribute("title", template.name);
        $template.append($preview);
        return $template;
    };
    var getTemplateGroupUI = function (group, fireFunc) {
        var $group = helpers.div("bre-templates-group");
        var $name = helpers.div("bre-templates-group-name", group.name || "");
        $name.onclick = function () {
            for (var i = 1; i < $group.children.length; i++) {
                helpers.toggleVisibility($group.children[i]);
            }
        };
        $group.append($name);
        group.templates.forEach(function (template) {
            var $template = getTemplateUI(template);
            $group.append($template);
            $template.onclick = function (ev) {
                ev.stopPropagation();
                fireFunc("select", {
                    template: template
                });
            };
        });
        return $group;
    };
    var getTemplateSelector = function () {
        var _a = emitter(), fire = _a.fire, on = _a.on, off = _a.off;
        var $element = helpers.div("bre-templates-root");
        var $loader = helpers.div("bre-templates-loader", "...LOADING...");
        var $templates = helpers.div("bre-templates-list");
        $element.append($loader, $templates);
        var setTemplates = function (templatesGroupped) {
            helpers.toggleVisibility($loader, false);
            templatesGroupped.forEach(function (group) {
                if (group.templates.length === 0) {
                    return;
                }
                var $group = getTemplateGroupUI(group, fire);
                $templates.append($group);
            });
        };
        return {
            $element: $element,
            setTemplates: setTemplates,
            on: on,
            off: off
        };
    };
    //# sourceMappingURL=templateSelector.js.map

    var Editor = (function () {
        function Editor($editor, options) {
            editor$2($editor, options);
        }
        return Editor;
    }());
    var editor$2 = function ($element, options) {
        if (options === void 0) { options = defaultOptions; }
        return new Promise(function (resolve) { return __awaiter(void 0, void 0, void 0, function () {
            var optionsWithDefaults, editor, rootContainer, templates, templatesUI, blocks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        optionsWithDefaults = __assign(__assign({}, defaultOptions), options);
                        editor = {
                            $element: $element,
                            state: getInitialState()
                        };
                        rootContainer = createRootContainer(editor);
                        editor.rootContainer = rootContainer;
                        editor.state.selectedContainers = [rootContainer];
                        editor.data = function () { return getContainerData(rootContainer); };
                        editor.html = function () { return getContainerHtml(rootContainer); };
                        helpers.toggleClassName($element, "bre-editor", true);
                        initHtmlTools(optionsWithDefaults);
                        return [4, loadTemplatesAsync(optionsWithDefaults.templatesUrl, editor.$element)];
                    case 1:
                        templates = _a.sent();
                        templatesUI = getTemplateSelector();
                        if (templates !== undefined) {
                            templatesUI.setTemplates(templates);
                            templatesUI.on("select", function (ev) {
                                var selectedContainer = editor.state.selectedContainers[0];
                                if (selectedContainer !== null) {
                                    addBlockToContainer(selectedContainer, {
                                        blockTemplate: ev.template
                                    }, true);
                                }
                            });
                            $element.append(templatesUI.$element);
                        }
                        return [4, loadInitialBlocks(optionsWithDefaults)];
                    case 2:
                        blocks = _a.sent();
                        if (blocks !== null) {
                            blocks.map(function (blockData) {
                                return addBlockToContainer(rootContainer, {
                                    blockData: blockData
                                }, false);
                            });
                        }
                        resolve(editor);
                        return [2];
                }
            });
        }); });
    };
    var loadInitialBlocks = function (_a) {
        var blocks = _a.blocks, blocksUrl = _a.blocksUrl;
        return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
            var url, blocks_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = blocksUrl;
                        if (!(url !== undefined)) return [3, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, getRequest(url)];
                    case 2:
                        blocks_1 = _a.sent();
                        resolve(blocks_1);
                        return [3, 4];
                    case 3:
                        error_1 = _a.sent();
                        reject(error_1);
                        return [3, 4];
                    case 4: return [2];
                    case 5:
                        if (blocks !== undefined) {
                            resolve(blocks);
                            return [2];
                        }
                        resolve(null);
                        return [2];
                }
            });
        }); });
    };
    //# sourceMappingURL=editor.js.map

    exports.Editor = Editor;
    exports.editor = editor$2;

    return exports;

}({}));
