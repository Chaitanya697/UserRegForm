namespace UserForm.Api.Models.Domain
{
    public class UserDetails
    {
        public int Id { get; set; }
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public string Nickname { get; set; }
        public string Email { get; set; }
        public string Country { get; set; }
        public string State { get; set; }
        public string Pincode { get; set; }
        public string Gender { get; set; }
        public string Password { get; set; }
        public string Mobile { get; set; }
        public DateTime date { get; set; }
        public bool agree { get; set; }
    }
}
