document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contact-form");
    const statusEl = document.getElementById("form-status");
    const submitBtn = document.getElementById("submit-btn");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        // Validación
        const email = document.getElementById("email").value.trim();
        const name = document.getElementById("nombre").value.trim();
        const message = document.getElementById("mensaje").value.trim();

        if (!name || !email || !message) {
            showStatus("Todos los campos son obligatorios.", "text-red-400");
            return;
        }

        if (!validateEmail(email)) {
            showStatus("Por favor, introduce un email válido.", "text-red-400");
            return;
        }

        // Mostrar mensaje de cargando
        submitBtn.disabled = true;
        submitBtn.textContent = "Enviando...";
        showStatus("Enviando mensaje...", "text-blue-400");

        const data = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                showStatus("✅ Mensaje enviado con éxito.", "text-green-400");
                form.reset();
            } else {
                const data = await response.json();
                if (Object.hasOwn(data, 'errors')) {
                    showStatus(data["errors"].map(error => error["message"]).join(", "), "text-red-400");
                } else {
                    showStatus("❌ Error al enviar el formulario.", "text-red-400");
                }
            }
        } catch (error) {
            showStatus("❌ Error de conexión.", "text-red-400");
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = "Enviar mensaje";
        }
    });

    function showStatus(message, colorClass) {
        statusEl.textContent = message;
        statusEl.className = `text-center mt-4 text-sm ${colorClass}`;
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});