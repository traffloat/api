(function() {var implementors = {};
implementors["rmp_serde"] = [{"text":"impl&lt;'a, W, C&gt; <a class=\"trait\" href=\"serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a> for &amp;'a mut <a class=\"struct\" href=\"rmp_serde/encode/struct.Serializer.html\" title=\"struct rmp_serde::encode::Serializer\">Serializer</a>&lt;W, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"rmp_serde/config/trait.SerializerConfig.html\" title=\"trait rmp_serde::config::SerializerConfig\">SerializerConfig</a>,&nbsp;</span>","synthetic":false,"types":["rmp_serde::encode::Serializer"]},{"text":"impl&lt;'a, W:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> + 'a&gt; <a class=\"trait\" href=\"serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a> for &amp;mut <a class=\"struct\" href=\"rmp_serde/encode/struct.ExtFieldSerializer.html\" title=\"struct rmp_serde::encode::ExtFieldSerializer\">ExtFieldSerializer</a>&lt;'a, W&gt;","synthetic":false,"types":["rmp_serde::encode::ExtFieldSerializer"]},{"text":"impl&lt;'a, W:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> + 'a&gt; <a class=\"trait\" href=\"serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a> for &amp;mut <a class=\"struct\" href=\"rmp_serde/encode/struct.ExtSerializer.html\" title=\"struct rmp_serde::encode::ExtSerializer\">ExtSerializer</a>&lt;'a, W&gt;","synthetic":false,"types":["rmp_serde::encode::ExtSerializer"]}];
implementors["serde_json"] = [{"text":"impl&lt;'a, W, F&gt; <a class=\"trait\" href=\"serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a> for &amp;'a mut <a class=\"struct\" href=\"serde_json/struct.Serializer.html\" title=\"struct serde_json::Serializer\">Serializer</a>&lt;W, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"serde_json/ser/trait.Formatter.html\" title=\"trait serde_json::ser::Formatter\">Formatter</a>,&nbsp;</span>","synthetic":false,"types":["serde_json::ser::Serializer"]},{"text":"impl <a class=\"trait\" href=\"serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a> for <a class=\"struct\" href=\"serde_json/value/struct.Serializer.html\" title=\"struct serde_json::value::Serializer\">Serializer</a>","synthetic":false,"types":["serde_json::value::ser::Serializer"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()