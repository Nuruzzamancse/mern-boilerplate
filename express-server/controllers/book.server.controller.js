// ./express-server/controllers/todo.server.controller.js
import mongoose from 'mongoose';

//import models
import Book from '../models/book.server.model';

export const getBooks = (req,res) => {
    Book.find().exec((err,books) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':'Todos fetched successfully',books});
  });
}

export const addBook = (req,res) => {
  console.log(req.body);
  console.log('Hi there');
  const newBook = new Book(req.body);
  newBook.save((err,book) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':'Todo added successfully',book});
  })
}

export const updateBook = (req,res) => {
    Book.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,book) => {
    if(err){
    return res.json({'success':false,'message':'Some Error','error':err});
    }
    console.log(book);
    return res.json({'success':true,'message':'Updated successfully',book});
  })
}

export const getBook = (req,res) => {
  Book.find({_id:req.params.id}).exec((err,book) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    if(book.length){
      return res.json({'success':true,'message':'Todo fetched by id successfully',book});
    }
    else{
      return res.json({'success':false,'message':'Todo with the given id not found'});
    }
  })
}

export const deleteBook = (req,res) => {
  Book.findByIdAndRemove(req.params.id, (err,book) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':book.bookText+' deleted successfully'});
  })
}
