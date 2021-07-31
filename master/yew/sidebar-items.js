initSidebarItems({"fn":[["initialize","Initializes yew framework. It should be called first."],["run_loop","Starts event loop."],["start_app","Starts an app mounted to a body of the document."],["start_app_with_props","Starts an app mounted to a body of the document."]],"macro":[["binary_format","This macro is used for a format that can be encoded as Binary.  It is used in conjunction with a type definition for a tuple struct with one (publicly accessible) element of a generic type.  Not all types that can be encoded as Binary can be encoded as Text. As such, this macro should be paired with the text_format macro where such an encoding works (e.g., JSON), or with the text_format_is_an_error macro for binary-only formats (e.g., MsgPack)."],["classes","This macro provides a convenient way to create [`Classes`]."],["html","This macro implements JSX-like templates."],["html_nested","This macro is similar to `html!`, but preserves the component type instead of wrapping it in `Html`."],["props","Build `Properties` outside of the `html!` macro."],["text_format","This macro is used for a format that can be encoded as Text.  It is used in conjunction with a type definition for a tuple struct with one (publically accessible) element of a generic type.  Since any type that can be encoded as Text can also be encoded as Binary, it should be used with the binary_format macro."]],"mod":[["app","This module contains the `App` struct, which is used to bootstrap a component in an isolated scope."],["callback","This module contains data types for interacting with `Scope`s."],["events","The module that contains all events available in the framework."],["format","Utility module to convert data to types and back by specific formats like: JSON, BSON, TOML, YAML, XML."],["html","The main html module which defines components, listeners, and class helpers."],["macros","This module contains macros which implements html! macro and JSX-like templates"],["prelude","The Yew Prelude"],["services","This module is a container of servies to interact with the external resources."],["utils","This module contains useful utilities to get information about the current document."],["virtual_dom","This module contains Yew’s implementation of a reactive virtual DOM."]]});