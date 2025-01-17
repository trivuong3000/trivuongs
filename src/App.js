
import React from "react";

const Login = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f5f5f5",
    },
    box: {
      backgroundColor: "#fff",
      padding: "2rem",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "400px",
      textAlign: "center",
    },
    logo: {
      marginBottom: "1rem",
    },
    heading: {
      fontSize: "1.5rem",
      marginBottom: "0.5rem",
    },
    text: {
      fontSize: "0.9rem",
      color: "#555",
    },
    formGroup: {
      marginBottom: "1rem",
      position: "relative",
    },
    input: {
      width: "100%",
      padding: "0.75rem",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "0.9rem",
    },
    link: {
      position: "absolute",
      right: "0.5rem",
      top: "50%",
      transform: "translateY(-50%)",
      fontSize: "0.8rem",
      color: "#007bff",
      textDecoration: "none",
    },
    button: {
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      padding: "0.75rem",
      width: "100%",
      fontSize: "1rem",
      borderRadius: "4px",
      cursor: "pointer",
    },
    social: {
      marginTop: "1rem",
    },
    socialButton: {
      border: "none",
      padding: "0.75rem",
      width: "48%",
      margin: "0.5rem 1%",
      fontSize: "0.9rem",
      borderRadius: "4px",
      cursor: "pointer",
    },
    google: {
      backgroundColor: "#ea4335",
      color: "white",
    },
    facebook: {
      backgroundColor: "#3b5998",
      color: "white",
    },
    footer: {
      marginTop: "1rem",
      fontSize: "0.9rem",
    },
    footerLink: {
      color: "#007bff",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <div style={styles.logo}>
          <img src="logo-placeholder.png" alt="Logo" />
        </div>
        <h2 style={styles.heading}>Đăng nhập</h2>
        <p style={styles.text}>Nhập tên đăng nhập và mật khẩu để tiếp tục</p>
        <form>
          <div style={styles.formGroup}>
            <input type="text" placeholder="Tên đăng nhập" style={styles.input} />
            <a href="/forgot-username" style={styles.link}>Quên tên đăng nhập?</a>
          </div>
          <div style={styles.formGroup}>
            <input type="password" placeholder="Mật khẩu" style={styles.input} />
            <a href="/forgot-password" style={styles.link}>Quên mật khẩu?</a>
          </div>
          <button type="submit" style={styles.button}>Đăng nhập</button>
        </form>
        <div style={styles.social}>
          <p>Hoặc đăng nhập bằng</p>
          <button style={{ ...styles.socialButton, ...styles.google }}>Google</button>
          <button style={{ ...styles.socialButton, ...styles.facebook }}>Facebook</button>
        </div>
        <div style={styles.footer}>
          <p>
            Chưa có tài khoản? <a href="/register" style={styles.footerLink}>Đăng ký</a>
          </p>
          <p>
            Cần giúp đỡ? <a href="/help-center" style={styles.footerLink}>Trung tâm trợ giúp</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

