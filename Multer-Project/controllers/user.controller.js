export const uploadUserFiles = (req, res) => {
  try {
    const profileImage = req.files.profileImage?.[0];
    const resume = req.files.resume?.[0];

    res.status(200).json({
      message: "Files uploaded successfully",
      data: {
        profileImage: profileImage?.filename || null,
        resume: resume?.filename || null,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};