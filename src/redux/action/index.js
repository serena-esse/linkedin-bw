export const PUT_TOKEN = 'PUT_TOKEN';
export const GET_FETCH = 'GET_FETCH';
export const GET_ESPERIENZE = 'GET_ESPERIENZE';
export const PUT_FETCH = 'PUT_FETCH';
export const PUT_IMG = 'PUT_IMG';
export const GET_ALLPOST = 'GET_ALLPOST';

// export const POST_ESPERIENZA = 'POST_ESPERIENZA';





export const putToken = (parametro) => {
    return {
        type: PUT_TOKEN,
        payload: parametro
    }

}
export const getFetch = (parametro) => {
    return (dispatch, getState) => {

        fetch(`https://striveschool-api.herokuapp.com/api/profile/me`, {
            headers: {
                Authorization: `Bearer ${parametro}` // Sostituisci "yourTokenVariable" con la variabile che contiene il token
            }
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Problema nella chiamata API");
                }
            })
            .then((obj) => {
                dispatch({
                    type: GET_FETCH,
                    payload: obj
                })
            })
            .catch((error) => {
                console.log("ERRORE", error);
            });
    }
}
// per profilo header
export const putFetch = (token, oggetto) => {
    return (dispatch, getState) => {

        fetch(`https://striveschool-api.herokuapp.com/api/profile/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(
                oggetto
            )
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Problema nella chiamata API");
                }
            })
            .then((obj) => {
                dispatch({
                    type: PUT_FETCH,
                    payload: obj
                })
            })
            .catch((error) => {
                console.log("ERRORE", error);
            });
    }
}

export const putImg = (token, id, formData) => {
    return (dispatch, getState) => {
        fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}/picture`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Problema nella chiamata API");
                }
            })
            .then((obj) => {
                dispatch({
                    type: PUT_FETCH,
                    payload: obj
                })

            })
            .catch((error) => {
                console.log("ERRORE", error);
            });

    }
}
// per esperienza
export const putImgEsperienza = (token, id, formData,idExp) => {
    return (dispatch, getState) => {
        fetch(` https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${idExp}/picture`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Problema nella chiamata API");
                }
            })
            .then((obj) => {
              
                dispatch(getAllesperienze(token,id))
                })

            
            .catch((error) => {
                console.log("ERRORE", error);
            });

    }
}

export const postEsperienza = (token, id, oggetto,formData) => {
    return (dispatch, getState) => {
        fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body:JSON.stringify( oggetto)
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Problema nella chiamata API");
                }
            })
            .then((obj) => {
              
               dispatch( putImgEsperienza(token,id,formData,obj._id))

            })
            .catch((error) => {
                console.log("ERRORE", error);
            });

    }
}
// per modificare esperienza
export const putEsperienza = (token, id, oggetto,idExp,formData) => {
    return (dispatch, getState) => {
        fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${idExp}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body:JSON.stringify( oggetto)
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Problema nella chiamata API");
                }
            })
            .then((obj) => {
              if(formData){
                  dispatch( putImgEsperienza(token,id,formData,obj._id))
              }else{
                dispatch(getAllesperienze(token,id))
              }
            })
            .catch((error) => {
                console.log("ERRORE", error);
            });

    }
}
export const getAllesperienze = (token,id) => {
    return (dispatch, getState) => {

        fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`, {
            headers: {
                Authorization: `Bearer ${token}` // Sostituisci "yourTokenVariable" con la variabile che contiene il token
            }
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Problema nella chiamata API");
                }
            })
            .then((obj) => {
                dispatch({
                    type: GET_ESPERIENZE,
                    payload: obj
                })
            })
            .catch((error) => {
                console.log("ERRORE", error);
            });
    }
}

export const deleteExperience = (token, idUtente, idExp) => {
    return (dispatch, getState) => {

        fetch(`https://striveschool-api.herokuapp.com/api/profile/${idUtente}/experiences/${idExp}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                if (response.ok) {
              
                    dispatch(getAllesperienze(token,idUtente));  
                    console.log("Esperienza eliminata con successo");
                } else {
                    throw new Error("Problema nella chiamata API");
                }
            })
            .catch((error) => {
                console.log("ERRORE", error);
            });
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// post

export const getAllPost = (token) => {
    return (dispatch, getState) => {

        fetch(`https://striveschool-api.herokuapp.com/api/posts/`, {
            headers: {
                Authorization: `Bearer ${token}` 
            }
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Problema nella chiamata API");
                }
            })
            .then((obj) => {
                dispatch({
                    type: GET_ALLPOST,
                    payload: obj
                })
            })
            .catch((error) => {
                console.log("ERRORE", error);
            });
    }
}
export const postaPost = (token, oggetto,formData) => {
    return (dispatch, getState) => {
        fetch(`https://striveschool-api.herokuapp.com/api/posts/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body:JSON.stringify( oggetto)
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Problema nella chiamata API");
                }
            })
            .then((obj) => {              
             if(formData){
                 dispatch(putImgPost(token,formData,obj._id));
             }else{
                dispatch(getAllPost(token));
             }

            })
            .catch((error) => {
                console.log("ERRORE", error);
            });

    }
}
export const putImgPost = (token,formData,postid) => {
    return (dispatch, getState) => {
        fetch(` https://striveschool-api.herokuapp.com/api/posts/${postid}/`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Problema nella chiamata API");
                }
            })
            .then((obj) => {
              
                dispatch(getAllPost(token));})

            
            .catch((error) => {
                console.log("ERRORE", error);
            });

    }
}
export const deletePost = (token, idPost) => {
    return (dispatch, getState) => {

        fetch(`https://striveschool-api.herokuapp.com/api/posts/${idPost}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                if (response.ok) {
              
                    alert("Post Rimosso")
                    dispatch(getAllPost(token))
                } else {
                    throw new Error("Problema nella chiamata API");
                }
            })
            .catch((error) => {
                console.log("ERRORE", error);
            });
    }
}
export const modificaPost = (token, postid, oggetto,formData) => {
    return (dispatch, getState) => {
        fetch(`https://striveschool-api.herokuapp.com/api/posts/${postid}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body:JSON.stringify( oggetto)
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Problema nella chiamata API");
                }
            })
            .then((obj) => {
              if(formData){
                  dispatch(putImgPost(token,formData,postid))
              }else{
                dispatch(dispatch(getAllPost(token)))
              }
              alert("Post modificato")
            })
            .catch((error) => {
                console.log("ERRORE", error);
            });

    }
}