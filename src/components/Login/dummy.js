<React.Fragment>
  <h2 className="mb-5">Sign up to Thought Catcher</h2>
  <form onSubmit={handleSubmit}>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="firstName">First Name</label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          placeholder="Enter your first name..."
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </div>
      <div class="form-group col-md-6">
        <label for="lastName">Last Name</label>
        <input
          type="text"
          class="form-control"
          id="lastName"
          placeholder="Enter your last name..."
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </div>
    </div>
    <div class="form-group">
      <label for="inputAddress">Email</label>
      <input
        type="email"
        class="form-control"
        id="email"
        placeholder="Enter email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        type="password"
        class="form-control"
        id="password"
        placeholder="Choose your password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
    </div>

    <button type="submit" class="btn btn-primary">
      Sign in
    </button>
  </form>
</React.Fragment>;
