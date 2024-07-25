import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import iconProfile from './../../img/profileIcon.png';

export const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleUpdateProfile = () => {
    navigate('/updateProfile');
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="image-wrapper">
            <img src={iconProfile} alt="Perfil" className="profile-image" />
          </div>
          <div className="profile-details">
            <h1>Nombre de Usuario</h1>
            <p><strong>Correo:</strong> usuario@ejemplo.com</p>
            <p><strong>Fecha de Nacimiento:</strong> 01/01/1990</p>
            <p><strong>Género:</strong> Masculino</p>
            <p><strong>Tipo de Usuario:</strong> Administrador</p>
            <p><strong>Nombre Completo:</strong> Juan Pérez</p>
          </div>
        </div>
        <div className="button-container">
          <button className="profile-button" onClick={handleUpdateProfile}>Actualizar información personal</button>
          <button className="profile-button" onClick={openModal}>Cambiar contraseña</button>
          <button className="profile-button">Administrar direcciones de entrega</button>
          <button className="profile-button">Administrar tarjetas de pago</button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Cambiar Contraseña</h2>
            <form>
              <div className="form-group">
                <label htmlFor="current-password">Contraseña Actual</label>
                <input type="password" id="current-password" name="current-password" required />
              </div>
              <div className="form-group">
                <label htmlFor="new-password">Nueva Contraseña</label>
                <input type="password" id="new-password" name="new-password" required />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Confirmar Nueva Contraseña</label>
                <input type="password" id="confirm-password" name="confirm-password" required />
              </div>
              <div className="modal-buttons">
                <button type="submit" className="modal-button">Guardar</button>
                <button type="button" className="modal-button" onClick={closeModal}>Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>
        {`
          .profile-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #ECA4AF, #9B414F);
            box-sizing: border-box;
            padding: 10px;
          }

          .profile-card {
            background-color: #ffffff;
            border-radius: 15px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            padding: 20px;
            width: 100%;
            max-width: 800px;
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            overflow-y: auto;
          }

          .profile-header {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            margin-bottom: 20px;
          }

          .image-wrapper {
            width: 150px;
            height: 150px;
            padding: 10px;
            border-radius: 50%;
            border: 6px solid #9B414F;
            margin-right: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .profile-image {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
          }

          .profile-details {
            flex: 1;
          }

          .profile-details h1 {
            margin: 0;
            color: #9B414F;
            font-size: 24px;
          }

          .profile-details p {
            margin: 10px 0;
            color: #333;
            line-height: 1.5;
          }

          .profile-details p strong {
            color: #9B414F;
          }

          .button-container {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 20px;
          }

          .profile-button {
            padding: 10px;
            font-size: 14px;
            background-color: #9B414F;
            color: #ffffff;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            width: 100%;
            max-width: 600px;
            align-self: center;
            transition: background-color 0.3s, transform 0.3s;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .profile-button:hover {
            background-color: #ECA4AF;
            transform: scale(1.05);
          }

          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
          }

          .modal {
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
          }

          .modal h2 {
            margin-top: 0;
            color: #9B414F;
          }

          .form-group {
            margin-bottom: 15px;
            margin-right: 20px;
          }

          .form-group label {
            display: block;
            margin-bottom: 5px;
            color: #333;
          }

          .form-group input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }

          .modal-buttons {
            display: flex;
            justify-content: space-between;
            gap: 10px;
          }

          .modal-button {
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            background-color: #9B414F;
            color: white;
            transition: background-color 0.3s;
          }

          .modal-button:hover {
            background-color: #ECA4AF;
          }

          @media (max-width: 600px) {
            .profile-header {
              flex-direction: column;
              align-items: center;
              text-align: center;
            }

            .image-wrapper {
              margin-right: 0;
              margin-bottom: 20px;
            }

            .profile-details h1 {
              font-size: 20px;
            }

            .profile-button {
              font-size: 12px;
            }

            .modal {
              padding: 10px;
            }

            .modal-buttons {
              flex-direction: column;
              gap: 10px;
            }

            .modal-button {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Profile;
