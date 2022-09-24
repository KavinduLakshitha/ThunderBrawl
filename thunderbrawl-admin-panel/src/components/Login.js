import React from "react";
import Connect from "./Connect";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <button
        className="admin__button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Connect
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <Connect />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
