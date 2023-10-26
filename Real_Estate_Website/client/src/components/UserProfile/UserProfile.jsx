const UserProfile = () => {
  const [user, setUser] = useState({});
  const [appointments, setAppointments] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Fetch user data from API and set it to the state
    const fetchUser = async () => {
      const response = await fetch("https://api.example.com/user/1");
      const data = await response.json();
      setUser(data);
    };
    fetchUser();

    // Fetch user's appointments from API and set it to the state
    const fetchAppointments = async () => {
      const response = await fetch(
        "https://api.example.com/user/1/appointments"
      );
      const data = await response.json();
      setAppointments(data);
    };
    fetchAppointments();

    // Fetch user's favorite properties from API and set it to the state
    const fetchFavorites = async () => {
      const response = await fetch("https://api.example.com/user/1/favorites");
      const data = await response.json();
      setFavorites(data);
    };
    fetchFavorites();
  }, []);

  return (
    <section className="wrap">
      <div className="container">
        <div className="navb">
          <nav className="menu">
            <ul>
              <li>
                <Link to="/">Profile-page</Link>
              </li>
              <li>
                <Link to="/">Contact info</Link>
              </li>
              <li>
                <Link to="/">Appointments</Link>
              </li>
              <li>
                <Link to="/">Favourite Properties</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="card-title">Profile</div>
            <div className="card-text">Name: </div>
            <div className="card-text">Email:</div>
            <div className="card-text">Phone: </div>
            <div className="card-text">Address: </div>
            <img
              src={profileImage}
              alt="User Profile"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
