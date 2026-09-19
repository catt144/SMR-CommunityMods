// Drives the form on report.md. Runs through Material's `document$` hook, not a
// plain DOMContentLoaded, because instant navigation swaps pages without a reload.
(function () {
  function init() {
    var form = document.getElementById("report-form");
    if (!form || form.dataset.bound) return;
    form.dataset.bound = "1";

    var endpoint = (form.dataset.endpoint || "").replace(/\/$/, "");
    var $ = function (id) {
      return document.getElementById(id);
    };
    var send = $("report-send");
    var progress = $("report-progress");
    var result = $("report-result");
    var LIMIT = 100 * 1024 * 1024;

    function say(text) {
      result.textContent = text;
    }

    function fail(text) {
      send.disabled = false;
      progress.textContent = "";
      say(text);
    }

    // The file goes first, on its own request, so a big save streams straight to
    // storage; the report then names it by code.
    function uploadFile(file, done) {
      var xhr = new XMLHttpRequest();
      xhr.open("PUT", endpoint + "/upload");
      xhr.setRequestHeader("X-Filename", encodeURIComponent(file.name));
      xhr.upload.onprogress = function (ev) {
        if (ev.lengthComputable) progress.textContent = " uploading file " + Math.round((ev.loaded / ev.total) * 100) + "%";
      };
      xhr.onload = function () {
        var body = {};
        try {
          body = JSON.parse(xhr.responseText);
        } catch (err) {}
        if (xhr.status === 200 && body.code) done(null, body.code);
        else done(body.error || "The file did not upload. Please try again, or send the report without it.");
      };
      xhr.onerror = function () {
        done("The file did not upload. Please check your connection and try again.");
      };
      xhr.send(file);
    }

    function sendReport(fileCode) {
      progress.textContent = " sending report";
      fetch(endpoint + "/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mod: $("report-mod").value,
          platform: $("report-platform").value,
          description: $("report-description").value,
          modList: $("report-modlist").value,
          fileCode: fileCode || "",
          website: $("report-website").value,
        }),
      })
        .then(function (res) {
          return res.json().then(function (body) {
            return { ok: res.ok, body: body };
          });
        })
        .then(function (r) {
          if (!r.ok) return fail(r.body.error || "The report did not go through. Please try again.");
          send.disabled = false;
          progress.textContent = "";
          if (r.body.url) {
            result.innerHTML = "";
            var p = document.createElement("span");
            p.textContent = "Sent — thank you. Your report is here; keep this link, replies appear on it: ";
            var a = document.createElement("a");
            a.href = r.body.url;
            a.textContent = r.body.url;
            result.appendChild(p);
            result.appendChild(a);
          } else {
            say("Sent — thank you. We have your report.");
          }
        })
        .catch(function () {
          fail("The report did not go through. Please check your connection and try again.");
        });
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      say("");
      progress.textContent = "";

      if (endpoint.indexOf("http") !== 0) {
        say("Sending reports is not switched on yet. Please leave a comment on the Steam Workshop page instead.");
        return;
      }
      if (!$("report-mod").value) return say("Choose which mod you are having trouble with.");
      if ($("report-description").value.trim().length < 10) return say("Please describe what happened, in a sentence or two.");

      var file = $("report-file").files[0];
      if (file && file.size > LIMIT) {
        return say("That file is over the 100 MB limit. Please leave it out and mention it in your description.");
      }

      send.disabled = true;
      if (file) {
        uploadFile(file, function (err, code) {
          if (err) return fail(err);
          sendReport(code);
        });
      } else {
        sendReport("");
      }
    });
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(init);
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
