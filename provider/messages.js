// Example of how providers can fetch their messages
const getProviderMessages = async (providerId) => {
    const q = query(
        collection(db, 'serviceMessages'),
        where('providerId', '==', providerId),
        orderBy('timestamp', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
}; 